import React, { useState, useEffect } from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { HiMiniMicrophone } from "react-icons/hi2";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import {isDarkState, storeSearchedItems, sidebar} from "../store/states.js"
import { useRecoilState } from 'recoil';

function Navbar() {
  const [visible, setVisible] = useState(false)
  const [input, setInput] = useState('')
  const [storeSearch, setStoreSearch] = useRecoilState(storeSearchedItems)
  const [dark,setDark] = useRecoilState(isDarkState)
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebar)
  const [showSearch, setShowSearch] = useState(false)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (input.trim() !== '') {
        const newSearchHistory = [input, ...storeSearch.slice(0, 9)]; 
        setStoreSearch(newSearchHistory);
        saveToLocalStorage(newSearchHistory);
        setInput('');
      }
    }
  };

  const saveToLocalStorage = (storeSearch) => {
    try {
      const stringified = JSON.stringify(storeSearch);
      localStorage.setItem('search-History', stringified);
    } catch (err) {
      console.log('Error saving data in local storage', err);
    }
  }
  
  const loadFromLocalStorage = () => {
    try {
      const serializedArray = localStorage.getItem('search-History')
      if (serializedArray === null) {
        return []
      }
      return JSON.parse(serializedArray);
    } catch (error) {
      console.error('Error loading from localStorage:', error)
      return []
    }
  }

  useEffect(() => {
    const prevSearch = loadFromLocalStorage()
    setStoreSearch(prevSearch)
  }, [])

  return (
    <nav className={`flex flex-col md:flex-row justify-between items-center p-2 md:p-4 ${dark ? `bg-[#101010] text-white`: `bg-white text-black`} w-full fixed top-0 left-0 z-50`}>
      <div className="flex items-center justify-between w-full md:w-auto mb-2 md:mb-0">
        <div className="flex items-center">
          <HiOutlineBars3 
            onClick={() => setIsSidebarOpen(prev => !prev)}
            className={`text-2xl md:text-3xl stroke-[0.8] hover:cursor-pointer mr-4 ${dark ? `hover:bg-[#2f2f2f]` : `hover:bg-[#c0c0c0]`} rounded-full p-1`} 
          />
          <div className='flex items-center' title='YouTube Home'>
            <img className={`w-8 h-6 md:w-12 md:h-9 ${dark ? `bg-[#0d0d0d] text-white`: `bg-white text-black`}`} src="https://as1.ftcdn.net/v2/jpg/05/76/26/56/1000_F_576265695_Qobu3Rmgl1fuY06wNgBJdUb5mnw7RX8h.png" alt="" />
            <div className={`${dark ? `bg-[#101010] text-white`: `bg-white text-black`} font-semibold text-xl md:text-2xl ml-1 tracking-tighter`}>YouTube</div>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <CiSearch className="text-2xl mr-4" onClick={() => setShowSearch(!showSearch)} />
          <div className={`flex justify-center items-center rounded-full bg-pink-600 text-white w-8 h-8 font-semibold hover:cursor-pointer`}>
            N
          </div>
        </div>
      </div>

      <div className={`${showSearch ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center w-full md:w-auto`}>
        <div className='search flex flex-col gap-1 w-full md:w-auto mb-2 md:mb-0 relative'>
          <div className='searchbar flex'>
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setVisible(true)}
              onBlur={() => setTimeout(() => setVisible(false), 200)}
              className={`w-full md:w-64 lg:w-96 h-10 rounded-l-3xl border outline-none pl-5 text-lg ${dark ? `bg-[#1a1a1a] text-white`: `bg-white text-black`} ${visible ? `border-[#4a47ff]` : `border-[#a1a1a1]`}`}
              type="text"
              placeholder='Search'
            />
            <div className={`w-14 h-10 rounded-r-3xl border border-[#a1a1a1] border-l-0 flex justify-center items-center 
            ${dark ? `bg-[#2a2a2a] text-white`: `bg-gray-100 text-black`}`}>
              <CiSearch className={`text-2xl stroke-[0.3] hover:cursor-pointer`} title='Search'/>
            </div>
          </div>
          {visible && (
            <div 
              className={`absolute top-full left-0 right-0 flex flex-col mt-2 w-full md:w-[calc(100%-3.5rem)] h-auto rounded-lg z-10 ${dark ? `bg-[#2a2a2a] text-white` : `bg-white shadow-sm shadow-[#393939] text-black`}`}>
              {storeSearch.map((item, index) => (
                <PreviousSearch 
                  entry={item}
                  index={index}
                  key={index}
                />
              ))}
            </div>
          )}
        </div>
        <div className={`flex justify-center items-center microphone w-10 h-10 rounded-full ml-2 hover:cursor-pointer ${dark ? `bg-[#2a2a2a] text-white`: `bg-gray-100 text-black`}`}>
          <HiMiniMicrophone className='text-xl' title='Search with your voice'/>
        </div>
      </div>

      <div className={`hidden md:flex items-center mt-2 md:mt-0`}>
        <MdOutlineDarkMode 
          onClick={() => setDark(prevState => !prevState)}
          className='text-2xl hover:cursor-pointer mr-4'
          title='Theme'
        />
        <RiVideoAddLine className={`text-2xl hover:cursor-pointer mr-4`} title='Create'/>
        <BsBell className={`text-[1.4rem] stroke-[0.1] hover:cursor-pointer mr-4`} title='Notifications'/>
        <div className={`flex justify-center items-center rounded-full bg-pink-600 text-white w-9 h-9 font-semibold hover:cursor-pointer`}>
          N
        </div>
      </div>
    </nav>
  )
}

function PreviousSearch({entry,index}) {
  const [storeSearch, setStoreSearch] = useRecoilState(storeSearchedItems)
  return (
    <div className='flex justify-between mx-3 text-md my-2'>
      <div className='flex gap-3'>
        <FaClockRotateLeft />
        {entry}
      </div>
      <div
        onClick={() => {
          const newSearch = [...storeSearch]
          newSearch.splice(index,1)
          setStoreSearch(newSearch)
        }} 
        className='text-[#8583ff] text-sm hover:underline'>Remove</div>
    </div>
  );
}

export default Navbar

