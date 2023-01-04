import { DataTypes, Model } from "sequelize";
import db from "../db/db.config";
import { ReplyInstance } from './reply';


interface PostAttributes {
    id: string;
    content: string;
    userId: string;
}

export class PostInstance extends Model<PostAttributes> { };

PostInstance.init({
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
                msg: "Please provide a content"
            }
        }
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: "POSTS"
}
);

PostInstance.hasMany(ReplyInstance, { foreignKey: 'postId', as: 'REPLY' });

ReplyInstance.belongsTo(PostInstance, { foreignKey: 'postId', as: 'POSTS' });
