import { NextAuthOptions } from "next-auth";
import { CredentialsProvider } from "next-auth/providers";
import bcrypt from 'bcrypt'
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export const authOptions: NextAuthOptions = {
    providers:[
        CredentialsProvider({
            id:"credentials",
            name: "Credentials",
            credentails:{
                username: {label: "Username", type:"test},
                password: {lable: "Password", type:"passowrd"}
            },
            async authorize()
        })
    ]
}