// Write your createCipher function here! ✨

export type Cipher = (character: string) => string;

export function createCipher(cipher: Cipher) {
	return (text: string) => {
		let result = "";

		for (const character of text) {
			result += cipher(character);
		}
		return result;
	};
}

// You'll need to export it so the tests can run it.
