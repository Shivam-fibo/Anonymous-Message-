import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail"; 
import { ApiResponse } from "@/types/ApiResponse";


export async function sendVerificationEmail(
email: string,
username:string,
verifyCode:string
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'you@example.com',
            to: 'user@gmail.com',
            subject: 'hello world',
            react: VerificationEmail({username, otp:verifyCode})
          });
        return{success: true, message:'Email send successfully '}
    } catch (error) {
        console.log("Error while sending verification error", error)
        return {success: false, message: 'Failed to send the verification message'}
    }
}



