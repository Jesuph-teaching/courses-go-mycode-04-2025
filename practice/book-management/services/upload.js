import multer from 'multer';
import { extname } from 'node:path';
import fs from 'node:fs';
fs.mkdir(
	'./uploads',
	{
		recursive: true,
	},
	function (err, path) {
		console.log(err, path);
	}
);

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads');
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname));
	},
});
const ebookMimeTypes = [
	'application/epub+zip',
	'application/x-mobipocket-ebook',
	'application/vnd.amazon.ebook',
	'application/x-mobi8-ebook',
	'application/pdf',
	'application/x-fictionbook+xml',
	'image/vnd.djvu',
	'application/x-ms-reader',
	'application/rtf',
	'application/msword',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	/*    "text/html",
    "text/plain" */
];

const maxSize = 100 * 1024 * 1024; // 100 MB
export const uploadEbooks = multer({
	storage: storage,
	fileFilter: function (req, file, cb) {
		if (ebookMimeTypes.includes(file.mimetype)) {
			cb(null, true);
		} else {
			cb(new Error('We only support valid e-books'), false);
		}
	},
	limits: {
		fileSize: maxSize,
	},
});
const audiobookMimeTypes = [
	'audio/mpeg', // MP3
	'audio/mp4', // M4B
	'audio/aac', // AAC
	'audio/ogg', // OGG/OGA
	'audio/wav', // WAV
	'audio/flac', // FLAC
];

export const uploadAudio = multer({
	storage: storage,
	fileFilter: function (req, file, cb) {
		if (audiobookMimeTypes.includes(file.mimetype)) {
			cb(null, true);
		} else {
			cb(new Error('We only support valid e-books'), false);
		}
	},
	limits: {
		fileSize: maxSize * 2,
	},
});
