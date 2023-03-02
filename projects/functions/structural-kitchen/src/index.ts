// Write your createKitchen function here! ✨
// You'll need to export it so the tests can run it.
export type Cleaner = (dirt: number, time?: number) => number;

export type Ingredients = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

export type Supplier = (expense: number) => Ingredients;

export function createKitchen(
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
): {} {
	let dirt = 0;
	let stock = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};
	return {};
}
