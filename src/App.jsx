import { HashRouter as Router } from "react-router-dom";
import { useState } from 'react'
import Dp from './assets/DisplayPic.svg'
import DisplayPic from './UIComponents/DisplayPic/DisplayPic'
import { MyButtonGroup } from './UIComponents/MyButtonGroup/MyButtonGroup'
import BasicSelect from './UIComponents/BasicSelect/BasicSelect'

import './App.css'

function App() {
  const [field, setfield] = useState("All")

  return (
	<div>
    <div className='
	First_Layer 
	border-1 box-border
	md:text-2xl
	flex flex_wrap
	flex-col md:flex-row-reverse 
	justify-start 
	items-end md:items-start
	w-screen 
	m-0
	'>
	<div className="
	Second_Layer_DP
	border-2 border-blue-500 
	w-8/10 md:w-5/10  ">
		<DisplayPic src = {Dp} alt={"picture_of_me"}/>
    </div>
	
	<div className='
	Second_Layer_Buttongroup
	
	self-end
	w-full 
	'>	
		<BasicSelect 
			items = {[
				"All",
				"Engineering",
				"Education",
				"Other"
			]}
			selectlabel='Field'
			/>
		

		<MyButtonGroup 
		buttons={[
			{name:"About"},
			{name: "Contact"},
			{name : "Experience"},
			{name : "Projects"}

			]}
			direction='col'
		 />
		
		 
	</div>

	</div>
	<div>
		<h1>About</h1>
	</div>
	</div>

  )
}


export default App
