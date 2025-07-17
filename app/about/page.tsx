import { SignedOut, SignInButton } from "@clerk/nextjs"

const page = () => {
  return (
    <div className="bg-gray-100 text-gray-800 flex flex-col items-center justify-center text-center">
        {/* hero sections */}
        <section className=" py-16 px-8 bg-gray-100">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
            bg-clip-text text-transparent
            ">
                About SleepTracker
            </h1>

            <p className="text-sm md:text-md ">
                At SleepWell, we believe that quality sleep is the foundation of a healthier, happier life. Our web app helps you track your sleep patterns, analyze trends, and discover personalized insights to improve your rest. Whether you are struggling with insomnia, irregular sleep schedules, or just want to optimize your nightly routine, SleepWell provides intuitive tools—from smart alarms to detailed sleep reports—backed by science. Join thousands of users who are waking up refreshed and taking control of their sleep, one night at a time.
            </p>
        </section>

        {/* mission section */}
        <section className="mt-[-20px] py-16 px-8 bg-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Our Mission</h2>
            <p>To empower people to achieve restorative sleep through technology, education, 
                and personalized insights. 
                We believe that better sleep leads to better lives—improving mental clarity, physical health, and emotional well-being. 
                By combining intuitive tracking with science-backed recommendations, we are on a journey to help you understand your sleep, break unhealthy patterns, and wake up every day feeling truly refreshed.</p>
        </section>

        {/* Features section */}
        <section className=" py-16 px-8 bg-gradient-to-r from-pink-500 via-pink-500 to-red-500 w-full">
             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Why Choose SleepTracker?</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-md shadow hover:scale-110 hover:shadow-2xl 
                hover:bg-gradient-to-br from-red-500 via-pink-500 to-purple-500 hover:text-white
                transition-all ease-in-out duration-400 ">
                    <h3 className="text-xl font-bold mb-2">Comprehensive Tracking</h3>
                    <p>Monitor your sleep and identify areas for improvement</p>
                </div>
                <div className="bg-white p-6 rounded-md shadow hover:scale-110 hover:shadow-2xl 
                hover:bg-gradient-to-br from-red-500 via-pink-500 to-purple-500 hover:text-white
                transition-all ease-in-out duration-400">
                    <h3 className="text-xl font-bold mb-2">Personalized Insight</h3>
                    <p>Recieve Tailored recommendation to Enhance your sleep</p>
                </div>
                <div className=" bg-white p-6 rounded-md shadow hover:scale-110 hover:shadow-2xl 
                hover:bg-gradient-to-br from-red-500 via-pink-500 to-purple-500 hover:text-white
                transition-all ease-in-out duration-400 ">
                    <h3 className="text-xl font-bold mb-2">User Friendly Design</h3>
                    <p> Enjoy seamless experience across all devices </p>
                </div>

            </div>
        </section>
        {/* Story section */}
        <section className=" py-16 px-8 bg-gray-100">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center">
                Sleep Tracker was born out of a personal struggle with sleep. Our founder, after years of battling insomnia and poor sleep quality, realized the need for a simple yet effective solution to track and improve sleep habits. With a background in technology and a passion for wellness, they set out to create an app that not only tracks sleep but also educates users on the science of rest. Today, Sleep Tracker is a community-driven platform that continues to evolve based on user feedback and the latest research in sleep science.
                Our team is dedicated to helping you understand your sleep patterns, break unhealthy habits, and wake up feeling refreshed and ready to take on the day. We are not just building an app; we are building a movement towards better sleep for everyone.       
            </p>
        </section>
        {/* call to action section */}
        <section className=" py-16 px-8 bg-gray-200 w-full mt-[-10px] ">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to sleep Better?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center">
                Join the Sleep Tracker community today and take the first step towards better sleep. Whether you are looking to improve your sleep quality, understand your patterns, or simply get more rest, we are here to help. Sign up now and start your journey to a healthier, happier you!
            </p>
            <SignedOut>
                <SignInButton>
                    <button className="mt-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white
                    px-4 py-2 rounded-md text-lg hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300
                    cursor-pointer">
                        Get started
                    </button>
                </SignInButton>
            </SignedOut>
        </section>

    </div>
  )
}

export default page