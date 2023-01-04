import { DataTypes, Model } from "sequelize";
import db from "../db/db.config";

interface ReplyAttributes {
    id: string;
    content: string;
    postId: string;
}

export class ReplyInstance extends Model<ReplyAttributes> { };

ReplyInstance.init({
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Content is required"
            },
            notEmpty: {
                msg: "Please provide content"
            }
        }
    },
    postId: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: "REPLY"
}
);
