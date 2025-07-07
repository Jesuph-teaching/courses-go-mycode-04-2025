declare type ResponseI<T = null> =
	| {
			success: true;
			message: string;
			data: T;
			statusCode: number;
	  }
	| {
			success: false;
			message: string;
			data: ErrorResponseI | null;
			statusCode: number;
	  };
declare interface ErrorResponseI {
	message: string;
	error: unknown;
}
declare interface ListOf<T> {
	list: T[];
	total: number;
	page: number;
	limit: number;
}
