import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DisplayPic from './DisplayPic/DisplayPic'
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
		<DisplayPic />
    </div>
	<div className="border-2 border-red-500">
		<TypeButton text={"Hello"}/>


	</div>
	</div>
  )
}

export default App
