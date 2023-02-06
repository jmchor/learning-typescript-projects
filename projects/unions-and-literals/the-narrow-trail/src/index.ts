export function runCommands() {
	let food = 5;
	let water = 5;
	let availableResource: "food" | "water" | undefined;

	//this is what the diceroll could mean
	let nextResupply: "food" | "water" | number;

	for (let i = 1; i <= 7; i++) {
		//has to be called inside the loop to be rolled every time...
		const diceRoll: number = Math.floor(Math.random() * 6) + 1;

		switch (diceRoll) {
			case 1:
				nextResupply = "food";
				break;
			case 2:
				nextResupply = "water";
				break;

			default:
				nextResupply = diceRoll;
				//if its anything other than 1 or 2, the dice value gets added to a resource
				break;
		}

		//can't be set to if (nextResupply > 2) because this keeps nextResupply's union type string | number, which can't be used with a "+" operator with numbers
		if (typeof nextResupply === "number") {
			switch (availableResource) {
				case "food":
					food = food + nextResupply;
					availableResource = undefined;
					break;
				case "water":
					water = water + nextResupply;
					availableResource = undefined;
					break;

				default:
					availableResource = nextResupply % 2 === 0 ? "food" : "water";
					break;
			}
		}

		switch (nextResupply) {
			case "food":
				availableResource = "food";
				break;
			case "water":
				availableResource = "water";
				break;
		}

		food -= 1;
		water -= 1;
		if (water === 0 || food === 0) {
			return false;
		}
	}
	return true;

	// Declare your variables and runtime logic here! ✨
}
