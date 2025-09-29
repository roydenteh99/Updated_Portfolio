import { useState } from 'react'
import Dp from './assets/DisplayPic.svg'
import DisplayPic from './UIComponents/DisplayPic/DisplayPic'
import { ButtonGroup } from './UIComponents/ButtonGroup/ButtonGroup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='
	First_Layer 
	border-1 box-border
	md:text-4xl
	flex flex-col flex_wrap
	md:flex-row-reverse 
	justify-start items-end 
	items-end
	md:items-start
	min-h-screen w-screen 
	'>
	<div className="
	Second_Layer_DP
	border-2 border-blue-500 
	basis-1/2
	w-8/10  ">
		<DisplayPic src = {Dp} alt={"picture_of_me"}/>
    </div>
	<div className='
	Second_Layer_Buttongroup
	basis-1/2
	border-2 border-pink-500
	w-full max-w-screen 
	'>
		<ButtonGroup 
		buttons={[
			{name:"About"},
			{name: "Contact"},
			{name : "Experience"}

			]} />




	</div>
	<div>
		<h1>About</h1>
	</div>
	</div>

  )
}


export default App
