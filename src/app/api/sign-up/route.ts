import dbConnect from '@/lib/dbConnect'

import UserModel from '@/model/User'

import bcrypt from "bcryptjs"

import { sendVerificationEmail } from '@/helpers/sendVerificationEmail'


export async function POST(request: Request) {
        await dbConnect();
        try {
           const {username, email , password} =  await request.json();

           const existingUserVerifiedByUsername = await UserModel.findOne({
            username,
            isVerified: true
           })

           if(existingUserVerifiedByUsername){
            return Response.json({
                success: false,
                message: "Username already taken"
            }, {
                status:400
            })
           }
           const exisitngUserByEmail = await UserModel.findOne({email})

           if(exisitngUserByEmail){

           }
           else{
            const hasedPassword = await bcrypt.hash(password, 10)
            const expiryDate = new Date()
            expiryDate.setHours(expiryDate.getHours() + 1)
            new UserModel({
                username,
                email,
                password : hasedPassword,   
                verifyCode,
                verifyCodeExpiry: expiryDate,
                isVerified : false,
                isAcceptingMessage: true,
                messages: []
            })
            
           }
        } catch (error) {
            console.error("Error registering user", error);
            return Response.json({
                success: false,
                message: "Error registering user"
            },
            {
                status: 500
            })
            

        }
}