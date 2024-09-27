import React from 'react'
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import {isDarkState, sidebar} from "../store/states.js"
import { useRecoilState } from 'recoil';

function Hamburger() {
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebar)
  const [dark, setDark] = useRecoilState(isDarkState)
  const hideScrollbarStyle = {
    overflowX: 'scroll',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  }

  return (
    <div className={`flex gap-5`}>
      <div className={`fixed top-[5.5rem] left-0 sm:left-5 text-white flex flex-col gap-7 transition-all duration-300 ${isSidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <NavItem icon={<MdHome />} text="Home" />
        <NavItem icon={<SiYoutubeshorts />} text="Shorts" />
        <NavItem icon={<MdOutlineSubscriptions />} text="Subscriptions" />
        <NavItem icon={<CiYoutube />} text="You" />
      </div>
      <div 
        style={hideScrollbarStyle} 
        className={`fixed top-[5.5rem] transition-all duration-300 
          ${isSidebarOpen ? 'left-16 sm:left-64' : 'left-16 sm:left-32'} 
          flex gap-4 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-8rem)] 
          overflow-x-scroll pr-5`}
      >
        <FeedOptions text="All" />
        <FeedOptions text="Web development" />
        <FeedOptions text="Data Structures" />
        <FeedOptions text="Software Engineering" />
        <FeedOptions text="Music" />
        <FeedOptions text="छठ पूजा" />
        <FeedOptions text="Live" />
        <FeedOptions text="CDS" />
        <FeedOptions text="Microsoft" />
        <FeedOptions text="News" />
        <FeedOptions text="RajyaSabha" />
        <FeedOptions text="Podcasts" />
        <FeedOptions text="System Design" />
        <FeedOptions text="Union Public Service Commission" />
        <FeedOptions text="Mixes" />
        <FeedOptions text="Media theories" />
        <FeedOptions text="Recently uploaded" />
        <FeedOptions text="Watched" />
        <FeedOptions text="New to you" />
        <FeedOptions text="Resumes" />
        <FeedOptions text="NDA" />
      </div>
    </div>
  )
}

function NavItem({ icon, text }) {
  const [dark, setDark] = useRecoilState(isDarkState)
  return (
    <div className='flex flex-col gap-1'>
      <div className={`text-[1.6rem] ${dark ? 'text-white' : 'text-[#1a1a1a]'}`} title={text}>
        {icon}
      </div>
      <div className={`text-[0.8rem] ${dark ? 'text-white' : 'text-[#1a1a1a]'}`}>{text}</div>
    </div>
  )
}

function FeedOptions({text}){
    const [dark, setDark] = useRecoilState(isDarkState)
    return (
        <div 
            className={`rounded-[0.3rem] px-2 h-8 py-1 whitespace-nowrap font-[500] ${dark ? `bg-[#292929] text-white hover:bg-[#5a5a5a]` : `bg-[#dbdbdb] text-black hover:bg-[#adadad]`}`}
        >
            {text}
        </div>
    )
}

export default Hamburger