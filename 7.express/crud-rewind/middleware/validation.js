import { validate as uuidValidate } from 'uuid';

export function validateId(req, res, next) {
	if (!uuidValidate(req.params.id)) {
		throw new Error('not a valid id');
	}
	next();
}
export function validateBody(schema) {
	return function (req, res, next) {
		schema.parse(req.body);
		next();
	};
}
