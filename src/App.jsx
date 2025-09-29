import { useState } from 'react'
import Dp from './assets/DisplayPic.svg'
import DisplayPic from './UIComponents/DisplayPic/DisplayPic'
import TypeButton from './TypeButton/TypeButton'
import { ButtonGroup } from './UIComponents/ButtonGroup/ButtonGroup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='
	First_Layer 
	border-1 box-border
	flex flex-row-reverse 
	justify-start items-start 
	min-h-screen w-screen 
	'>
	<div className="
	Second_Layer
	border-2 border-blue-500 
	w-full max-w-sm sm:max-w-md lg:max-w-lg">
		<DisplayPic src = {Dp} alt={"picture_of_me"}/>
    </div>
	<div className='
	Second_Layer
	border-2 border-pink-500 
	'>
		<ButtonGroup 
		buttons={[
			{name:"Hi"


		}]}></ButtonGroup>



	{/* <div className="border-2 border-red-500">
		<TypeButton text={"Hello"}/>


	</div> */}
	</div>
	</div>

  )
}


export default App
