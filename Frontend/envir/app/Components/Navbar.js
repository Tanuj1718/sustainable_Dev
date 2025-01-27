import Link from 'next/link';

export function Navbar(){
    return(
        <>
        <div className="fixed bg-black w-full h-[100px] flex items-center border-b border-gray-800">
            <div className="absolute left-[10%]">
              <h1 className="font-bold text-[30px] text-green-600">Sustainable Room</h1>
            </div>
            <div className="flex space-x-12 absolute list-none right-[20%]">
                <li className="text-[20px] font-bold text-slate-500 hover:cursor-pointer hover:border-b-2 border-green-700">Home</li>
                <li className="text-[20px] font-bold text-slate-500 hover:cursor-pointer hover:border-b-2 border-green-700">About</li>
               <Link href={"/UserPage"}><li className="text-[20px] font-bold text-slate-500 hover:cursor-pointer hover:border-b-2 border-green-700">DashBoard</li></Link> 
                <li className="text-[20px] font-bold text-slate-500 hover:cursor-pointer hover:border-b-2 border-green-700">Donate Us</li>
                <li className="text-[20px] font-bold text-slate-500 hover:cursor-pointer hover:border-b-2 border-green-700">Signup</li>
            </div>
        </div>
        </>
    )
}