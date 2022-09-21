export default class Product {
	id: string;
	name: string;
	price: number;
	description: string;

	constructor(id: string, price: number, name: string, description: string) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
	}
}
