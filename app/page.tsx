import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server"

const page = async () => {
  const user = await currentUser();
  if(!user){
    return <Guest />
  }
  return (
    <div>Home</div>
  )
}

export default page