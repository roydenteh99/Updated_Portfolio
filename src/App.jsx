import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Dp from './assets/DisplayPic.svg'
import viteLogo from '/vite.svg'
import DisplayPic from './UIComponents/DisplayPic/DisplayPic'
import TypeButton from './TypeButton/TypeButton'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (


    <div className=' border-1 
	flex flex-row-reverse justify-start items-start min-h-screen w-screen box-border'>
	<div className="
	border-2 border-blue-500 
	w-xs md:w-sm lg:w-2xl">
		<DisplayPic src = {Dp} alt={"picture_of_me"}/>
    </div>
	<div className="border-2 border-red-500">
		<TypeButton text={"Hello"}/>


	</div>
	</div>
  )
}

export default App
