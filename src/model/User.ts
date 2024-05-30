import mongoose, { Schema, Document } from "mongoose";



// interface for message
export interface Message extends Document{
    content : string;
    createdAt: Date

}



const MessageSchema: Schema<Message> = new Schema({
    content:{
        type : String,
        required: true
    },
    createdAt : {   
        type: Date,
        required: true,
        default : Date.now

    }
})

// interface for user

export interface User extends Document {
    username: string,
    email: string,
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: true,
    isAcceptingMessage: boolean,
    messages: Message[]
}

const UserSchema :Schema<User> = new Schema({
    username:{
        type: String,
        required: [true, "Username is required"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/.+\@.+\..+/, 'Please use a valid email']
    },
    password:{
        type : String,
        required: [true, 'Password is required']
    },
    verifyCode: {
            type: String,
            required: [true, "verify code is required"],
    },
    verifyCodeExpiry:{
        type: String,
        required: [true, "verify code expiry is required"],
    },
    isVerified:{
        type: String,
        default: false  
    },
    isVeisAcceptingMessagerified:{
        type: String,
        default: true,  
    },
    messages:[MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema))


export default UserModel    