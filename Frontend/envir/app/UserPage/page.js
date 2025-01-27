import { Navbar } from "../Components/Navbar";
import Image from "next/image";
import newEnv from "../UserPage/newEnv.jpg";
import userImage from "../UserPage/imagee.avif";
import { Mail, Users, Book } from "lucide-react";


export default function UserData() {
 
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900">
        <Navbar />
         <div className="w-full min-h-screen flex items-center justify-center px-4">
          <div className="h-auto rounded-2xl w-full max-w-lg mt-7 bg-white shadow-2xl overflow-hidden">
            <div className="w-full h-[200px]">
              <Image
                className="h-full w-full object-cover"
                src={newEnv}
                alt="Environment"
              />
            </div>
            <div className="flex justify-center -mt-[75px]">
              <div className="h-[150px] w-[150px] bg-white rounded-full border-4 border-gray-900 overflow-hidden shadow-lg">
                <Image src={userImage} alt="User" className="h-full w-full object-cover"/>
              </div>
            </div>

            <div className="text-center mt-5">
              <h1 className="text-3xl font-bold text-gray-800">Misaki Kun</h1>
              <p className="text-gray-600 text-sm">Environment Activist</p>
            </div>

            <div className="w-full px-6 mt-4">
              <div className="flex items-center space-x-4 text-gray-700 mb-4">
                <Mail className="text-blue-700" />
                <h1 className="font-medium">mohitsati.eth@gmail.com</h1>
              </div>
              <div className="flex items-center space-x-4 text-gray-700 mb-4">
                <Users className="text-blue-700" />
                <h1 className="font-medium">Arctic Ocean, Earth</h1>
              </div>
              <div className="flex items-center space-x-4 text-gray-700">
                <Book className="text-red-600" />
                <h1 className="font-medium">B.Tech, Computer Science</h1>
              </div>
            </div>

            <div className="text-center mt-6 mb-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg">
                Connect Now
              </button>
              </div>
            </div>
           </div>
          </div>
    </>
  );
}
