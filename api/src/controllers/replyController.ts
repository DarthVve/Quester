import { Request, Response, NextFunction } from "express";
import { ReplyInstance } from '../models/reply';
import { UserInstance } from "../models/user";
import { v4 as uuidv4 } from "uuid";
import { replySchema, options } from "../utility/utils"

//Create a reply 
export async function reply(req: Request | any, res: Response, next: NextFunction) {
    const id = uuidv4()
    try {
        const username = req.user.username;
        const postId = req.post.id;
        const validateResult = replySchema.validate(req.body, options)
        if (validateResult.error) {
            return res.status(400).json({ Error: validateResult.error.details[0].message })
        };

        const record = await ReplyInstance.create({ id, ...req.body, postId, username })
        res.status(201).json({
            message: "Reply sent",
            record
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'failed to reply',
            route: '/reply'

        })
    }
};

export async function getReplies(req: Request, res: Response, next: NextFunction) {
    try {
        const limit = req.query?.limit as number | undefined
        const offset = req.query.offset as number | undefined

        const replies = await ReplyInstance.findAndCountAll({
            limit, offset, include:
                [{
                    model: UserInstance,
                    as: 'USERS'
                }]
        });

        res.status(200).json({
            msg: 'All replies fetched successfully',
            count: replies.count,
            reply: replies.rows
        })
    } catch (error) {
        res.status(500).json({
            msg: 'failed to fetch posts',
            route: '/replies'
        })
    }
};

//Delete a reply
export async function delReply(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params
        const record = await ReplyInstance.findOne({ where: { id } });
        if (!record) {
            res.status(404).json({
                message: "Reply does not exist"
            })
        }
        const deletedReply = await record?.destroy();
        res.status(200).json({
            msg: 'Your reply has been deleted successfully',
            deletedReply
        })
    } catch (err) {
        res.status(500).json({
            msg: 'failed to delete',
            route: '/del-reply/:id'
        })
    }
};