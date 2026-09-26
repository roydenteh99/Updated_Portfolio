export default function Diamond({opacity= "0.8", field = "All" }) {
	const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	
	const palettes = { All: ["#d5dfd0", "#aab7a3"], Engineering: ["#c6ded8", "#8eafa7"], Education: ["#ead9b7", "#c8b98e"], Other: ["#d9cce0", "#b4a5bc"] };
	const [color1, color2] = palettes[field] || palettes.All;
	
	return(
	<div className="hidden md:block">
	<svg width="100%" height="50%" viewBox="0 0 200 200" fill="none" 
	style={{ position: "absolute", top: "40%", left: 0 }} 
	opacity = {opacity}
	xmlns="http://www.w3.org/2000/svg"> 
	<g clip-path="url(#clip0_105_351)"> 
	<path d="M156.064 143.936L112.127 100L156.064 56.0636L200 100L156.064 143.936ZM43.9364 143.936L0 100L43.9364 56.0636L87.8728 100L43.9364 143.936ZM100 200L56.0636 156.064L100 112.127L143.936 156.064L100 200ZM100 87.8728L56.0636 43.9364L100 0L143.936 43.9364L100 87.8728Z" fill="url(#paint0_linear_105_351)"/> </g> <defs> <linearGradient id="paint0_linear_105_351" x1="20.5" y1="16" x2="100" y2="200" gradientUnits="userSpaceOnUse"> 
	<stop stop-color={color1}/> <stop offset="1" stop-color={color2}/> 
	</linearGradient> <clipPath id="clip0_105_351"> 
	<rect width="200" height="200" fill="white"/> 
	</clipPath> </defs> </svg>
	</div>
	)

}
