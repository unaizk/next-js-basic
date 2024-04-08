"use server";
import client from '@/db'

export async function signup(username : string, password : string){
    try {
        const user = await client.user.create({
            data :{
                username,
                password
            }
        });
        return 'Signed up'
    } catch (error) {
        console.log(error);
        
    }
}