import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { JournalInstance } from '../models/journal';
import { journalSchema, options } from '../utility/utils';
import { UserInstance } from '../models/user';


// Creates a Journal
export async function createJournal(req: Request | any, res: Response, next: NextFunction) {
    const id = uuidv4();
    const userId = req.user.id;
    const name = req.file.originalname;
    try {
        const validation = journalSchema.validate(req.body, options)
        if (validation.error) {
            return res.status(400).json({ Error: validation.error.details[0].message });
        }
        //const user = await UserInstance.findOne({ where: { id: userId }, include: [{ model: JournalInstance, as: 'JOURNALS' }] }) as unknown as { [key: string]: string };
        const journal = await JournalInstance.create({ id, ...req.body, name, userId });
        res.status(201).json({
            msg: "Journal created",
            journal
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Unable to create journal', route: '/upload' })
    };
};


//Downloads a Journal
export async function dlJournal(req: Request | any, res: Response, next: NextFunction) {
    const userId = req.user.id;
    const name = `${userId}.pdf`;
    try {
        res.download(`../../journalStorage/${name}`)
        res.status(200).json({
            msg: "Journal downloaded successfully"
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Unable to download journal', route: '/download' })
    };
};


//Get All Journals
export async function viewJournals(req: Request, res: Response, next: NextFunction) {
    try {
        const limit = req.query?.limit as number | undefined;
        const offset = req.query?.offset as number | undefined;

        const journals = await JournalInstance.findAndCountAll({
            limit, offset, include: [{
                model: UserInstance,
                as: 'USERS'
            }]
        });
        res.status(200).json({
            msg: "Here are the available Journals",
            count: journals.count,
            response: journals.rows
        })
    } catch (err) { res.status(500).json({ msg: "Unable to show Journals", route: '/journals' }) };
};