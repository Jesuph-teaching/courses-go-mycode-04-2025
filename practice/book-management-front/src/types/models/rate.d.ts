declare interface BasicRate {
	bookId: string; // Book ID
	rating: number; // Rating value (1-5)
}

declare interface RateI extends BasicRate {
	_id: string; // Rate ID
	ratedBy: string; // User ID
	createdAt: string; // Creation date
	updatedAt: string; // Last update date
}
