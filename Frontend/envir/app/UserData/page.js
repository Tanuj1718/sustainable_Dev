import { Navbar } from "../Components/Navbar";
import { User, Video } from 'lucide-react';
import Image from "next/image";
import wasteManagement from "../UserData/wasteManage.jpg"

export default function UserData() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-green-900">
        <Navbar />
        <div className="w-full h-[100px] flex flex-col justify-center items-center space-y-6 mt-[100px]">
          <div className="flex space-x-8">
            <h1 className="text-[30px] font-bold text-purple-700">User Raju Bhai's data </h1>
            <User className="text-[30px] font-bold text-blue-700 h-[50px] w-[50px]" />
          </div>
        </div>
        <div className="min-h-screen w-full mt-[20px] flex flex-col space-y-16 items-center">
          <h1 className="mt-9 text-[30px] underline font-bold text-white">Waste management</h1>
          <div className="w-[70%] sm:w-[80%] md:w-[50%] md:h-[400px] h-[300px] sm:h-[250px] mt-14">
            <Image
              src={wasteManagement}
              alt="Image"
              className="h-full w-full rounded-2xl"
            />
          </div>
          <div className="p-3 text-center h-auto w-full md:w-[60%]">
            <p className="font-semibold text-white text-[20px]">
              Waste management or waste disposal includes the processes and actions
              required to manage waste from its inception to its final
              disposal. This includes the collection, transport, treatment, and disposal
              of waste, together with monitoring and regulation of the waste management
              process and waste-related laws, technologies, and economic mechanisms.
            </p>
          </div>

          <div>
            <h1 className="font-bold text-[40px] text-white">Project videos</h1>
          </div>

          <div className="w-full sm:w-[80%] md:w-[60%] h-auto">
            <div className="w-full h-auto flex-wrap space-y-5 flex justify-around mt-4">
              <video className="w-[70%] sm:w-[45%] h-full" controls autoPlay>
                <source src="/videos/proof.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video className="w-[70%] sm:w-[45%] h-full" controls autoPlay>
                <source src="/videos/proof.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video className="w-[70%] sm:w-[45%] h-full" controls autoPlay>
                <source src="/videos/proof.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video className="w-[70%] sm:w-[45%] h-full" controls autoPlay>
                <source src="/videos/proof.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
