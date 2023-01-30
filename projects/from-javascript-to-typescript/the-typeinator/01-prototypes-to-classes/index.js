// Put your Robot and Humanoid classes here! ✨
// See ./original.js for their older JavaScript code.

module.exports.Humanoid = Humanoid;
module.exports.Robot = Robot;


class Robot {
    constructor (name, abilities) {
        this.name = name;
        this.abilities = abilities;
        this.power = 100;
    }

    announce () {
        console.log("Greetings. I am " + this.name + ".");

	for (var i = 0; i < this.abilities.length; i += 1) {
		console.log("I am able to " + this.abilities[i] + ".");
	}

    }
}
