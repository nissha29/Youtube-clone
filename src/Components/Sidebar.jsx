import React from 'react'
import {isDarkState, sidebar} from "../store/states.js"
import { useRecoilState } from 'recoil';
import { MdHome, MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { RiContactsBook2Line, RiVideoLine } from "react-icons/ri";
import { GoHistory } from "react-icons/go";
import { PiPlaylistLight, PiLightbulbFilamentThin } from "react-icons/pi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebar)
  const [dark, setDark] = useRecoilState(isDarkState)

  return (
    <>
      {/* Full sidebar for larger screens */}
      <div className={`hidden md:block fixed z-10 left-0 top-16 ${dark ? `bg-[#101010] text-white`: `bg-white text-black`} w-64 h-screen overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='ml-6 mt-5 flex flex-col gap-3'>
          <GoTo image={<MdHome />} text="Home"/>
          <GoTo image={<SiYoutubeshorts />} text="Shorts"/>
          <GoTo image={<MdOutlineSubscriptions />} text="Subscriptions"/>
          <div className={`my-5 w-48 h-[0.1rem] rounded ${dark ? `bg-[#393939]` : `bg-[#b6b6b6]`}`}></div>
          <div className={`flex gap-1`}>
            <div className='font-[500]'>You</div>
            <div className='mt-1'><IoIosArrowForward /></div>
          </div>
          <GoTo image={<RiContactsBook2Line />} text="Your Channel"/>
          <GoTo image={<GoHistory />} text="History"/>
          <GoTo image={<PiPlaylistLight />} text="Playlists"/>
          <GoTo image={<RiVideoLine />} text="Your videos"/>
          <GoTo image={<PiLightbulbFilamentThin />} text="Your Courses"/>
          <GoTo image={<MdOutlineWatchLater />} text="Watch later"/>
          <GoTo image={<AiOutlineLike />} text="Liked videos"/>
          <div className={`my-5 w-48 h-[0.1rem] rounded ${dark ? `bg-[#393939]` : `bg-[#b6b6b6]`}`}></div>
        </div>
      </div>

      {/* Mini sidebar for smaller screens */}
      <div className={`md:hidden fixed z-10 left-0 top-16 ${dark ? `bg-[#101010] text-white`: `bg-white text-black`} w-16 h-screen overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='mt-5 flex flex-col items-center gap-6'>
          <MiniGoTo image={<MdHome />} text="Home"/>
          <MiniGoTo image={<SiYoutubeshorts />} text="Shorts"/>
          <MiniGoTo image={<MdOutlineSubscriptions />} text="Subs"/>
          <MiniGoTo image={<RiContactsBook2Line />} text="Channel"/>
          <MiniGoTo image={<GoHistory />} text="History"/>
        </div>
      </div>
    </>
  )
}

function GoTo({image, text}){
  const [dark, setDark] = useRecoilState(isDarkState)
  return(
    <div className={`flex gap-3 text-[17px] w-48 p-1 rounded-md hover:cursor-pointer ${dark ? `hover:bg-[#3e3e3e]` : `hover:bg-[#d3d3d3]` }`}>
      <div className='mt-[0.15rem]'>{image}</div>
      <div>{text}</div>
    </div>
  )
}

function MiniGoTo({image, text}){
  const [dark, setDark] = useRecoilState(isDarkState)
  return(
    <div className={`flex flex-col items-center text-[10px] w-12 p-1 rounded-md hover:cursor-pointer ${dark ? `hover:bg-[#3e3e3e]` : `hover:bg-[#d3d3d3]` }`}>
      <div className='text-xl mb-1'>{image}</div>
      <div>{text}</div>
    </div>
  )
}

export default Sidebar