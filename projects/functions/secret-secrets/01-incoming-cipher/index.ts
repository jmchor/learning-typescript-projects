// Write your createCipher function here! ✨

export type Cipher = (character: string) => string;
//create a type alias for a function that takes in a string and returns a string

export function createCipher(cipher: Cipher) {
	//create a function which takes in the previously typed function and has a return type of a EVERYTHING which is written after the first "return" (that is the Return Type of that function and very specific)
	return (text: string) => {
		let result = "";

		for (const character of text) {
			result += cipher(character);
		}
		return result;
	};
}

// You'll need to export it so the tests can run it.
