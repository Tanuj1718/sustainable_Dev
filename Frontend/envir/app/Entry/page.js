"use client"
import { useRef, useState } from "react";
import axios from "axios";
import { Navbar } from "../Components/Navbar";
import { Image, Video } from "lucide-react";

export default function UserEntry() {
    const imageInputRef = useRef(null);
    const videoInputRef = useRef(null);
    const [images, setImages] = useState([]);
    const [video, setVideo] = useState(null);

    const handleImageUpload = (event) => {
        setImages([...images, ...event.target.files]);
        alert("image is added")
    };

    const handleVideoUpload = (event) => {
        if(event.target.files.length > 0) {
            setVideo(event.target.files[0]);
            alert("video is added")
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        images.forEach((image) => formData.append("images", image));
        if(video){
            formData.append("video", video);
        }

        try{
            await axios.post("http://localhost:5000/api/users/request", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        );
        console.log("data is sended to backend")
        } 
        catch(error){
            console.error("Error uploading files:", error);
        }
    };

    return (
        <>
            <div className="bg-gradient-to-br from-black via-gray-900 to-green-900 min-h-screen w-full flex flex-col space-y-6">
                <Navbar />
                <div className="w-full min-h-screen flex flex-col items-center space-y-10 px-4">
                    <div className="w-full h-auto flex flex-col items-center justify-center space-y-7 mt-20">
                        <div>
                            <h1 className="text-4xl md:text-5xl text-center font-bold text-purple-600"> Create Epic Content </h1>
                            <p className="text-lg md:text-xl text-center font-semibold text-slate-400"> Share your creativity with the world ✨</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-lg w-full md:w-[70%] lg:w-[50%] min-h-screen mt-20 md:mt-10 flex flex-col items-center space-y-7 p-6">
                        <input className="w-full md:w-[85%] p-2 rounded-xl ring-2 hover:ring-yellow-400 border-2 border-blue-600 mt-6" placeholder="Enter the title of project" />
                        <input className="w-full md:w-[85%] p-2 rounded-xl ring-2 hover:ring-yellow-400 border-2 border-blue-600 mt-6" placeholder="Enter the address" />
                        <textarea placeholder="Explain your story" className="p-2 h-[300px] md:h-[400px] lg:h-[500px] w-full md:w-[85%] rounded-xl font-bold"></textarea>
                        <div className="h-[200px] md:h-[250px] lg:h-[300px] rounded-3xl w-full md:w-[85%] bg-slate-200 flex flex-col space-y-4 justify-center items-center">
                            <Image onClick={() => imageInputRef.current.click()} className="h-[50px] md:h-[75px] lg:h-[100px] w-[50px] md:w-[75px] lg:w-[100px] hover:cursor-pointer" />
                            <h1 onClick={() => imageInputRef.current.click()} className="text-base md:text-lg lg:text-xl font-bold hover:cursor-pointer"> Drop your images here</h1>
                            <input ref={imageInputRef} className="hidden" type="file" multiple onChange={handleImageUpload} />
                        </div>
                        <div className="h-[200px] md:h-[250px] lg:h-[300px] rounded-3xl w-full md:w-[85%] bg-slate-200 flex flex-col space-y-4 justify-center items-center">
                            <Video onClick={() => videoInputRef.current.click()} className="h-[50px] md:h-[75px] lg:h-[100px] w-[50px] md:w-[75px] lg:w-[100px] hover:cursor-pointer" />
                            <h1 onClick={() => videoInputRef.current.click()} className="text-base md:text-lg lg:text-xl font-bold hover:cursor-pointer"> Drop your video here</h1>
                            <input ref={videoInputRef} className="hidden" type="file" accept="video/*" onChange={handleVideoUpload} />
                        </div>
                        <button onClick={handleSubmit} className="rounded-xl transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-600 p-2 w-full md:w-[85%] text-lg md:text-xl lg:text-2xl text-white font-bold">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
