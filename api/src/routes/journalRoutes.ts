import express, { Request, Response, NextFunction } from 'express';
import multer, { FileFilterCallback } from 'multer';
import { createJournal, dlJournal, viewJournals } from '../controllers/journalController';
const router = express.Router();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './journalStorage');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const filter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    let fileFormat = file.mimetype.split('/');
    let fileType = fileFormat[1];
    if (fileType == 'pdf') {
        cb(null, true);
    } else {
        cb(null, false)
    }
};

const upload = multer({ storage: fileStorage, fileFilter: filter });

/* Journal Upload */
router.post('/upload', upload.single('upload'), createJournal)

/* Journal Download */
router.get('/download', dlJournal);

//Get all Journals
router.get('/', viewJournals)

export default router;
