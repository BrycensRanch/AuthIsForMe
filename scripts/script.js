const { spawnSync } = require('child_process');

// Function to run Git commands and return the output as a string
function runGitCommand(command, args) {
	const result = spawnSync(command, args);
	if (result.error) {
		console.error(`Error running ${command}: ${result.error.message}`);
		process.exit(1);
	}
	return result.stdout.toString().trim();
}

// Check if there are any local tags not yet pushed to the remote
const localTags = runGitCommand('git', ['for-each-ref', '--format', '%(refname:short)', 'refs/tags']);
const remoteTags = runGitCommand('git', ['ls-remote', '--tags', 'origin']);

const localTagArray = localTags.split('\n');
const remoteTagArray = remoteTags.split('\n').map(line => line.split('\t')[1].replace('refs/tags/', ''));

const tagsToSign = localTagArray.filter(tag => !remoteTagArray.includes(tag));

if (tagsToSign.length > 0) {
	// Loop through tags that are not on the origin and sign each one
	for (const tag of tagsToSign) {
		// Get the original tag message
		const gitShowOutput = runGitCommand('git', ['show', '--format=%B', tag]);
		const lines = gitShowOutput.split('\n');
		let originalMessage = '';
		let skipNext = false;
		for (const line of lines) {
			if (skipNext) {
				skipNext = false;
				continue;
			}
			if (line.startsWith('tag ')) {
				skipNext = true;
				continue;
			}
			originalMessage += line + '\n';
		}

		// Sign the tag using GPG with the preserved message
		runGitCommand('git', ['tag', '-s', tag, '-m', originalMessage.trim()]);
	}

	// Push the signed tags to the remote repository
	runGitCommand('git', ['push', '--tags']);

	console.log(`Signed and pushed ${tagsToSign.length} local tag(s) not on the origin.`);
} else {
	console.log('No local tags to sign and push that are not on the origin.');
}
