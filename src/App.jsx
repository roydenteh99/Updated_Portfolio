
import { useState ,useEffect} from 'react'
import Dp from './assets/DisplayPic.svg'
import DisplayPic from './UIComponents/DisplayPic/DisplayPic'
import { MyButtonGroup } from './UIComponents/MyButtonGroup/MyButtonGroup'
import BasicSelect from './UIComponents/BasicSelect/BasicSelect'
import MarkdownComponent from './UIComponents/MarkdownComponent/MarkdownComponent'
import { HashRouter, useLocation, useNavigate } from "react-router-dom";
import aboutPath from "./data/aboutPath.json"
import './App.css'

const fields = ["All","Engineering","Education","Other"]

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
	
	const handleFieldChange = (newField) => {
    	setfield(newField);
    	navigate(`/${newField}`); // update URL hash
  };


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
			flex flex-col space-y-2
			self-end
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
					{name:"About"},
					{name: "Contact"},
					{name : "Experience"},
					{name : "Projects"}

					]}
					direction='col'
				/>
		
		 
			</div>

		</div>
		<div id = "about" className="
		First_layer_about
		border border-blue-500 
		w-full
		p-5
		text-left">
			<MarkdownComponent filepath={aboutPath[field]} />

		</div>
		<div className='text-left'>
			<h1>Experience</h1>
		</div>
	</div>

  	)
}


export default function App() {
  // HashRouter wraps MainContent, giving it access to hooks
  return (
    <HashRouter>
      <MainContent />
    </HashRouter>
  );
}
