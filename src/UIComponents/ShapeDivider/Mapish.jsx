

export default function Mapish({opacity= "0.8", field = "All" }) {
	const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	
	const palettes = { All: ["#e0e7dc", "#b8c5b1"], Engineering: ["#d3e5e1", "#a0c3ba"], Education: ["#f0e1c3", "#d2bd8f"], Other: ["#e5d9e8", "#c0aec8"] };
	const [color1, color2] = palettes[field] || palettes.All;

	
	return(
	
	<svg width="100%" height="100%" viewBox="0 0 200 150" fill="none" 
	style={{ position: "absolute", top: 0, left: 0 ,objectFit: "cover"}} 
	opacity = {opacity}
	preserveAspectRatio="none"
	xmlns="http://www.w3.org/2000/svg"> 
	<g clip-path="url(#clip0_105_351)"> 
	<path d="M0 45.7358L50 33L100 45.7358L150 33L200 45.7358V168L150 155.264L100 168L50 155.264L0 168V45.7358Z" 
	fill="url(#paint0_linear_105_437)"/> 
	</g> 
	<defs> <linearGradient id="paint0_linear_105_437" x1="100" y1="33" x2="100" y2="168" gradientUnits="userSpaceOnUse">
	<stop stop-color={color1}/> <stop offset="1" stop-color={color2}/> 
	</linearGradient> <clipPath id="clip0_105_351"> 
	<rect width="200" height="200" fill="white"/> 
	</clipPath> </defs> </svg>
	
	)

}

