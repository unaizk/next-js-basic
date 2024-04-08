import axios from 'axios'
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

interface User {
  email : string,
  name : string
}
const getUserDetails = async() =>{
  
  const user = await client.user.findFirst({})
  console.log(user,'hello');
  
  return user
  
}
export default async function Home() {
  const userDetails = await getUserDetails()
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
                Name: {userDetails?.username}
            </div>
            
            {userDetails?.password}
        </div>
    </div>
</div>
  );
}
