declare interface BasicBookI {
	title: string;
	author: string;
	description: string;
	price: {
		current: number;
		original?: number;
	};
	stock?: number;
	cover?: string;
}

declare interface BookI extends BasicBookI {
	_id: string;
	createdAt: string;
	updatedAt: string;
}
