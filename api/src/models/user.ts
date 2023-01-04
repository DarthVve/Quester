import { DataTypes, Model } from "sequelize";
import db from "../db/db.config";
import { JournalInstance } from './journal';
import { PostInstance } from './post';

interface UserAttributes {
    id: string;
    occupation: string;
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    phonenumber: string;
    licenseNo: string;
    password: string;
    verified: boolean;
};

export class UserInstance extends Model<UserAttributes> { };

UserInstance.init({
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        allowNull: true
        // validate: {
        //     notNull: {
        //         msg:     occupation is required"
        //     },
        //     notEmpty: {
        //         msg: "Please provide a   occupation"
        //     }
        // }
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Firstname is required"
            },
            notEmpty: {
                msg: "Please provide a firstname"
            }
        }
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Lastname is required"
            },
            notEmpty: {
                msg: "Please provide a lastname"
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Email is required"
            },
            notEmpty: {
                msg: "Please provide an email"
            }
        }
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Username is required"
            },
            notEmpty: {
                msg: "Please provide a username"
            }
        }
    },
    phonenumber: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Phonenumber is required"
            },
            notEmpty: {
                msg: "Please provide a phonenumber"
            }
        }
    },
    licenseNo: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        // validate: {
        //     notNull: {
        //         msg: "LicenseNo is required"
        //     },
        //     notEmpty: {
        //         msg: "Please provide a LicenseNo"
        //     }
        // }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Password is required"
            },
            notEmpty: {
                msg: "Please provide a strong password"
            }
        }
    },
    verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},
    {
        sequelize: db,
        tableName: "USERS"
    }
);

UserInstance.hasMany(JournalInstance, { foreignKey: 'userId', as: 'JOURNAL' });

JournalInstance.belongsTo(UserInstance, { foreignKey: 'userId', as: 'USERS' });

UserInstance.hasMany(PostInstance, { foreignKey: 'userId', as: 'POSTS' });

PostInstance.belongsTo(UserInstance, { foreignKey: 'userId', as: 'USERS' });