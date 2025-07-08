declare interface BasicCategoryI {
	name: string;
}

declare interface CategoryI extends BasicCategoryI {
	_id: string;
	createdAt: string;
	updatedAt: string;
}
