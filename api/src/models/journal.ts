import { DataTypes, Model } from "sequelize";
import db from "../db/db.config";

interface JournalAttributes {
    id: string;
    title: string;
    description: string;
    journal: Blob;
}

export class JournalInstance extends Model<JournalAttributes> { };

JournalInstance.init({
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Title is required"
            },
            notEmpty: {
                msg: "Please provide a title"
            }
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Description is required"
            },
            notEmpty: {
                msg: "Please provide a description"
            }
        }
    },
    journal: {
        type: DataTypes.BLOB,
        allowNull: false,
        validate: {
            notNull: {
                msg: "PDF is required"
            },
            notEmpty: {
                msg: "Please provide a PDF"
            }
        }
    }
},
    {
        sequelize: db,
        tableName: "JOURNAL"
    }
);
