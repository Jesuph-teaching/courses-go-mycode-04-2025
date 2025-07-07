declare type USER_TYPES = 'Admin' | 'User';

declare interface LoginUserI {
	email: string;
	password: string;
}

declare interface RegisterUserI extends LoginUserI {
	firstName: string;
	lastName: string;
}
declare interface BasicUserI extends RegisterUserI {
	role: USER_TYPES;
	books: {
		favorite: string[];
		borrowed: string[];
		read: string[];
		listened: string[];
	};
}
declare interface UserI extends BasicUserI {
	_id: string;
	createdAt: string;
	updatedAt: string;
}
