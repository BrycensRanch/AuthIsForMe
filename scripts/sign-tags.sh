#!/bin/bash

# Check if the script is running in a CI environment (GitHub Actions)
if [ "$CI" = "true" ] || [ "$CI" = "1" ] || [ -n "$GITHUB_ACTIONS" ]; then
	echo "This script is intended for personal use by the maintainer and should not be used in a CI environment (GitHub Actions included)."
	exit 1
fi

# Get the list of tags in the repository
TAGS=$(git tag)

# Display a warning and ask for confirmation
read -p "This script is for personal use by the maintainer only and should not be used in a CI environment. Are you sure you want to proceed? (yes/no): " CONFIRM
if [ "$CONFIRM" != "yes" ]; then
	echo "Operation canceled."
	exit 1
fi

# Loop through each tag, sign it with the default GPG key, and preserve the existing message
for TAG in $TAGS; do
	TAG_MESSAGE=$(git show -s --format=%B "$TAG") # Get the existing tag message
	echo "Signing tag: $TAG"
	git tag -s "$TAG" -f -m "$TAG_MESSAGE" "$TAG" # Sign with the existing message
done

# Force-push the signed tags to the remote repository
echo "Force-pushing signed tags to the remote repository..."
git push origin --tags --force

echo "All tags have been signed and force-pushed."
