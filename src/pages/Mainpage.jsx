import React from 'react'
import {isDarkState} from "../store/states.js"
import { useRecoilState } from 'recoil';

function Mainpage() {
  const [dark,setDark] = useRecoilState(isDarkState)
  return (
    <>
      <div className={`w-screen h-screen ${dark ? `bg-[#101010] text-white` : `bg-white text-black relative overflow-x-hidden overflow-y-hidden` }`}>
      </div>
    </>
  )
}

export default Mainpage