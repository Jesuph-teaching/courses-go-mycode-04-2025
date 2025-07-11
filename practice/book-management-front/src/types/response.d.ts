declare type SuccessResponseI<T = null> = {
	message: string;
	success: true;
	data: T;
	token?: string;
};
declare type ErrorResponseI = {
	message: string;
	success: false;
	error: unknown;
};
declare type ResponseI<T = null> = SuccessResponseI<T> | ErrorResponseI;

declare interface ListOf<T> {
	list: T[];
	total: number;
	page: number;
	limit: number;
}
