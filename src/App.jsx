
// ─── React Core ────────────────────────────────────────────────────────────────
import { useState, useEffect } from 'react';

// ─── React Router ─────────────────────────────────────────────────────────────
import { HashRouter, useLocation, useNavigate } from "react-router-dom";

// ─── Assets ───────────────────────────────────────────────────────────────────
import Dp from './assets/DisplayPic.svg';

// ─── Icons ───────────────────────────────────────────────────────────────────
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


// ─── UI Components ────────────────────────────────────────────────────────────

import { MyButtonGroup } from './UIComponents/MyButtonGroup/MyButtonGroup';
import BasicSelect from './UIComponents/BasicSelect/BasicSelect';
import MarkdownComponent from './UIComponents/MarkdownComponent/MarkdownComponent';
import Timeline from './UIComponents/Timeline/Timeline';
import CardList from './UIComponents/Card/CardList';
import ContactList from './UIComponents/ContactComponent/ContactList';
import ListOfList from './UIComponents/ListWithSubject/ListOfList';
import CardFlip from './UIComponents/CardFlip/CardFlip';

// ─── Data ─────────────────────────────────────────────────────────────────────
import aboutPath from "./data/aboutPath.json";
import skillPath from "./data/skillPath.json";
import displayOverlay from './data/displayOverlayPath.json';
import experiencePath from "./data/experiencePath.json";
import projectPath from "./data/projectPath.json";
import contactIntroPath from "./data/contactIntroPath.json";

// ─── Styles ───────────────────────────────────────────────────────────────────
import './App.css';

// ─── Constants ────────────────────────────────────────────────────────────────
const fields = ["All", "Engineering", "Education", "Other"];

function MainContent() {
	
	const location = useLocation();
	const navigate = useNavigate();

	// initialize from pathname
  	const rawField =  location.pathname.replace("/", "");
	const initialField = fields.includes(rawField) ? rawField : "All"
  	const [field, setfield] = useState(initialField);

	// sync state with URL hash
	useEffect(() => {
	
		const hashField = location.pathname.replace("/", "");
		if (hashField && hashField !== field && fields.includes(hashField)) {
				setfield(hashField);
			}
  		}, [location.pathname, field]);
	
	
	// Handle dropdown field change
	const handleFieldChange = (newField) => {
    	setfield(newField);
    	navigate(`/${newField}`); // update URL hash
  };


	return (
	<main>

	{/* ─── Profile Section ─────────────────────────────────────────────── */}
		<header className='
		First_Layer 
		md:text-2xl
		flex flex_wrap
		flex-col md:flex-row-reverse 
		justify-start 
		items-end md:items-start
		w-full
		m-0
		'>
			<div
			className="
				w-8/10 md:w-5/10
				relative
				overflow-hidden
			"
			>
			{/* Base picture */}
			<img
				src={Dp}
				alt="picture_of_me"
				className="w-full h-full object-cover"
			/>

			{/* Overlay on hover */}
			<div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
				<img
				src={displayOverlay[field]}
				alt="Overlay"
				className="w-full h-full object-cover"
				/>
			</div>
			</div>
				
			<div className='
			flex flex-col space-y-2 
			self-center
			w-full 
			'>	
				<BasicSelect 
					items = {fields}
					selectlabel='Field'
					value = {field}
					onValueChange={handleFieldChange}
				/>
				

				<MyButtonGroup 
				buttons={[
					{name:"About", targetId:"About"},
					{name:"Skills", targetId:"Skills"},
					{name : "Experience" , targetId:"Experience"},
					{name: "Projects", targetId:"Projects"},
					{name : "Contacts", targetId:"Contacts"},
					]}
					direction='col'
				/>

			</div>

		</header>

		{/* ─── About Section ─────────────────────────────────────────────── */}
		<section id = "About" className=""
		>
			<h1 className='mb-5'>About</h1>
			<MarkdownComponent filepath={aboutPath[field]} />

		</section>
		{/* ─── Skill Section ─────────────────────────────────────────────── */}
		<section id = "Skills" >
			<h1 className='mb-5'>Skills</h1>
			<ListOfList list_of_list = {skillPath} field ={field}/>
		</section>


		{/* ─── Experience Section ─────────────────────────────────────────────── */}
		<section id ="Experience" className='
		overflow-x-auto scroll-smooth'
		 >
			<h1 className='mb-5'>Experience</h1>
			<Timeline timelineData={experiencePath} field={field}></Timeline>

					
		</section>

		{/* ─── Projects Section ─────────────────────────────────────────────── */}
		<section id ="Projects" className='
		 overflow-x-auto scroll-smooth' >
			<h1 className='mb-5'>Projects</h1>
			<CardList cardList = {projectPath} field = {field}/>
	
			
			
		</section>
	{/* ─── Contact Section ─────────────────────────────────────────────── */}
		<footer
		id="Contacts"
		className="w-full bg-gray-100 dark:bg-gray-900 text-left p-10 flex flex-col items-start"
		>
		<h1 className="mb-5">Contact</h1>

		<p className="mb-4 max-w-2xl">
			{contactIntroPath[field]}
		</p>
		<ContactList items ={[
			{label: "GitHub", icon: <FaGithub />, link: "https://github.com/roydenteh99" },
			{label: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/royden-teh-2b4b0215b/"},
			{label: "Gmail", icon: <FaEnvelope />, link: "mailto:roydenteh100@gmail.com" , linkDisplay: "roydenteh100@gmail.com"}
			
			]}/>
		<br/>
		Credit :
		<a className="text-sm" href="https://www.flaticon.com/free-icons/public-speaking" title="public speaking icons">Icons created by Freepik - Flaticon</a>
		<a className="text-sm" href="http://www.freepik.com/" title="Numerous icon">Skills Icons created by Freepik</a>	
		</footer>
	</main>
	

  	)
}

// ─── App Wrapper ──────────────────────────────────────────────────────────────
export default function App() {
  // HashRouter wraps MainContent, giving it access to hooks
  return (
    <HashRouter>
      <MainContent />
    </HashRouter>
  );
}
