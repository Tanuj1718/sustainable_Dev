import Image from "next/image";
import { Navbar } from "./Components/Navbar";
import { ChevronRight, Globe, Users } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen w-full flex flex-col space-y-16 bg-gradient-to-br from-black via-gray-900 to-green-900">
        <div className="w-full h-auto mt-[200px] flex flex-col justify-center items-center px-4">
          <div className="h-auto w-full sm:w-[90%] md:w-[70%]">
            <h1 className="text-[40px] sm:text-[50px] md:text-[60px] text-center font-bold text-white">Welcome to the World of
              <span className="text-green-600"> Sustainable Development</span>
            </h1>
            <p className="font-medium text-slate-500 text-center mt-6 text-[16px] sm:text-[18px] md:text-[20px]">
              Join us in the world of Sustainable Development where you can contribute to the welfare of society
            </p>
          </div>

          <div className="w-full sm:w-[90%] md:w-[70%] mt-14 flex flex-wrap justify-center gap-6">
            <div className="flex justify-center w-[200px] sm:w-[250px] transition-transform duration-300 hover:scale-110 text-[20px] sm:text-[25px] md:text-[30px] bg-violet-700 rounded-xl text-white font-bold">
              <button className="p-2 font-bold flex items-center"> Explore
                <ChevronRight className="ml-2" />
              </button>
            </div>

            <div className="flex justify-center w-[200px] sm:w-[250px] transition-transform duration-300 hover:scale-110 text-[20px] sm:text-[25px] md:text-[30px] rounded-md bg-green-600 text-white">
              <button className="p-2 font-bold flex items-center">Join Us!!
                <Users className="ml-2" />
              </button>
            </div>
          </div>

          <div className="w-full sm:w-[90%] md:w-[70%] mt-10 flex flex-wrap justify-center gap-6">
            <div className="h-full bg-gray-800/50 p-6 hover:bg-gray-800/70 transition-all duration-300 w-[90%] sm:w-[45%] md:w-[30%] flex flex-col items-center space-y-7 rounded-xl">
              <Globe className="h-[60px] sm:h-[70px] md:h-[80px] w-[60px] sm:w-[70px] md:w-[80px] text-green-500" />
              <h1 className="text-white font-bold text-[20px] sm:text-[22px] md:text-[25px]">Global Impact</h1>
              <p className="text-center text-[15px] sm:text-[16px] md:text-[17px] text-slate-400"> Connect with initiatives transforming our planet</p>
            </div>

            <div className="h-full bg-gray-800/50 p-6 hover:bg-gray-800/70 transition-all duration-300 w-[90%] sm:w-[45%] md:w-[30%] flex flex-col items-center space-y-7 rounded-xl">
              <Users className="h-[60px] sm:h-[70px] md:h-[80px] w-[60px] sm:w-[70px] md:w-[80px] text-green-500" />
              <h1 className="text-white font-bold text-[20px] sm:text-[22px] md:text-[25px]">Community Driven</h1>
              <p className="text-center text-[15px] sm:text-[16px] md:text-[17px] text-slate-400"> Collaborate with passionate changemakers</p>
            </div>

            <div className="h-full bg-gray-800/50 p-6 hover:bg-gray-800/70 transition-all duration-300 w-[90%] sm:w-[45%] md:w-[30%] flex flex-col items-center space-y-7 rounded-xl">
              <ChevronRight className="h-[60px] sm:h-[70px] md:h-[80px] w-[60px] sm:w-[70px] md:w-[80px] text-green-500" />
              <h1 className="text-white font-bold text-[20px] sm:text-[22px] md:text-[25px]">Learn & Grow</h1>
              <p className="text-center text-[15px] sm:text-[16px] md:text-[17px] text-slate-400">Develop skills for a sustainable future</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
