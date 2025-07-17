import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link";
import { checkUser } from "@/lib/checkUser"

const Navbar = async () => {
    const user = await checkUser();
    console.log(user);
    
  return (
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-gray-200">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                        <span className="text-md sm:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            SleepTracker
                        </span>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link href="/" className="text-gray-700 hover:text-purple-600 px-2 py-1 rounded-md text-sm
                        sm:px-3 sm:py-2 sm:text-base font-medium hidden sm:block
                        ">
                        Home
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-purple-600 px-2 py-1 rounded-md text-sm
                        sm:px-3 sm:py-2 sm:text-base font-medium hidden sm:block
                        ">
                        About
                        </Link>
                        <SignedOut>
                            <SignInButton>
                                <button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white
                                hover:from-purple-600 hover:via-pink-600 hover:to-red-600 sm:px-4 sm:py-2 px-3 py-1 rounded-md text-sm sm:text-md cursor-pointer 
                                ">
                                    Sign In
                                </button>
                            </SignInButton>
                        </SignedOut>

                        <SignedIn>
                            <UserButton />
                        </SignedIn>


                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar