import React from 'react'
import data from '../Videos-data/data.json'
import { BsThreeDotsVertical } from "react-icons/bs";
import {isDarkState, sidebar} from "../store/states.js"
import { useRecoilState } from 'recoil';

function Videos() {
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebar)
  return (
    <div className={`fixed top-36 bottom-0 right-0 overflow-y-auto 
      grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
      gap-4 p-4 transition-all duration-300
      ${isSidebarOpen ? 'left-16 sm:left-64' : 'left-16 sm:left-32'}`}>
      {data.map(video => (
        <Video 
          key={video.id}
          thumbnail={video.thumbnailUrl}
          description={video.description}
          channelName={video.channelName}
          views={video.views}
          postedAgo={video.postedAgo}
        />
      ))}
    </div>
  )
}

function Video({ thumbnail, description, channelName, views, postedAgo }) {
  const [dark, setDark] = useRecoilState(isDarkState)
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebar)
  
  return ( 
    <div className={`mb-4 ${dark ? 'text-white' : 'text-black'}`}>
      <div className="relative w-full pt-[56.25%]">
        <img src={thumbnail} className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"/>
      </div>
      <div className='flex gap-2 mt-2'>
        <div className="flex-shrink-0">
          <img src={thumbnail} className='rounded-full w-8 h-8 sm:w-10 sm:h-10 object-cover'/>
        </div>
        <div className='flex-grow min-w-0'>
          <div className='flex items-start'>
            <h3 className="flex-grow font-semibold text-sm sm:text-base line-clamp-2">{description}</h3>
            <BsThreeDotsVertical className='flex-shrink-0 text-lg ml-2'/>
          </div>
          <p className={`${dark ? 'text-[#9d9d9d]' : 'text-[#393939]'} text-xs sm:text-sm mt-1`}>{channelName}</p>
          <p className={`${dark ? 'text-[#9d9d9d]' : 'text-[#393939]'} text-xs sm:text-sm`}>{views} views • {postedAgo}</p>
        </div>
      </div>
    </div>
  );
}

export default Videos