
import { useState ,useEffect} from 'react'
import Dp from './assets/DisplayPic.svg'
import DisplayPic from './UIComponents/DisplayPic/DisplayPic'
import { MyButtonGroup } from './UIComponents/MyButtonGroup/MyButtonGroup'
import BasicSelect from './UIComponents/BasicSelect/BasicSelect'
import MarkdownComponent from './UIComponents/MarkdownComponent/MarkdownComponent'
import Timeline from './UIComponents/Timeline/Timeline'
import { HashRouter, useLocation, useNavigate } from "react-router-dom";
import aboutPath from "./data/aboutPath.json"
import experiencePath from "./data/experiencePath.json"
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
		w-full
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
			border-2 border-blue-500 
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
					{name : "Experience" , targetId:"Experience"},
					{name: "Contact"},
					{name : "Projects"}
					]}
					direction='col'
				/>
				
		
		 
			</div>

		</div>
		<div id = "About" className="
		First_layer_about
		border border-blue-500 
		w-full
		p-5
		text-left">
			<MarkdownComponent filepath={aboutPath[field]} />

		</div>
		<div id ="Experience" className='text-left p-5 w-full overflow-x-auto scroll-smooth' >
			<h1 className='mb-5'>Experience</h1>
			<Timeline timelineData={experiencePath} field={field}></Timeline>

					
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
