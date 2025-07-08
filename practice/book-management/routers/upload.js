import { Router } from 'express';
import { uploadFile } from '../handlers/upload.js';
import { uploadEbooks, uploadAudio } from '../services/upload.js';

const uploadsRouter = Router();

uploadsRouter.route('/e-book').post(uploadEbooks.single('e-book'), uploadFile);
uploadsRouter.route('/audio').post(uploadAudio.single('audio'), uploadFile);

export default uploadsRouter;
