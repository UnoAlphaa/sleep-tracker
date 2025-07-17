import AddNewRecord from "@/components/AddNewRecord";
import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server"
import Image from "next/image";

const page = async () => {
  const user = await currentUser();
  if(!user){
    return <Guest />
  }
  return (
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8"> 
            {/* left column */}
            <div className="space-y-6">
                <div className="bg-black p-6 rounded-md text-white shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-6"> 
                      {/* User Image */}
                      <img
                      src={user?.imageUrl}
                      alt='users image'
                      width={100}
                      height={100}
                      className="rounded-full object-contain"
                      />

                      {/* user Details */}
                      <div className="flex-1">
                          <h2 className="text-md md:text-lg font-bold">Howdyy👋, {' '}
                            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">{user.firstName}</span>
                          </h2>
                          <p className=" mb-4 text-md">
                          Here's a quick overview of your sleep pattern, stay on top of your data insight and manage your sleep waves 😉
                          </p>

                          <div>
                            <p className="">
                              <span className="font-semibold text-white">Joined:{' '}</span>
                              {new Date(user.createdAt).toLocaleDateString()}
                              </p>
                              <p className="text-white">
                                  <span className="font-semibold text-white">Last Active:</span> {' '}
                                  {user.lastActiveAt? new Date(user.lastActiveAt).toLocaleString() : 'N/A'}
                              </p>
                          </div>
                      </div>
                </div>

                <AddNewRecord/>
            </div>

            {/* Right column */}
        </div>
    </div>
  )
}

export default page