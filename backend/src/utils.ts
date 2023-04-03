import crypto from "node:crypto";

/**
 * When the user register this will generate a random salt to use to hash the password provided
 * @param password
 * @returns hash, salt
 */
export function hashPassword(password: string) {
	const salt = crypto.randomBytes(32).toString("hex");

	return { hash: crypto.pbkdf2Sync(password, salt, 100_000, 64, "sha512").toString("hex"), salt };
}

//

/**
 * When the user login the provided password will be hashed with the salt from the user profile, the password is correct if the result will match the stored hash on user profile
 * @param candidatePassword User login input provided password
 * @param salt Salt from user stored in the db
 * @param hash User hashed password stored in the db
 * @returns Boolean
 */
export function isPasswordCorrect({
	candidatePassword,
	salt,
	hash,
}: {
	candidatePassword: string;
	salt: string;
	hash: string;
}) {
	return crypto.pbkdf2Sync(candidatePassword, salt, 100_000, 64, "sha512").toString("hex") === hash;
}
