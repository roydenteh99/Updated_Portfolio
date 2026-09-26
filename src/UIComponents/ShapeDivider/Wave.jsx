
export default function Wave({opacity= "0.8", field = "All" }) {
	const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	
  const palettes = { All: ["#d5dfd0", "#aab7a3"], Engineering: ["#c6ded8", "#8eafa7"], Education: ["#ead9b7", "#c8b98e"], Other: ["#d9cce0", "#b4a5bc"] };
  const [lightStart, lightEnd] = palettes[field] || palettes.All;
  const color1 = prefersDarkMode ? lightEnd : lightStart;
  const color2 = prefersDarkMode ? "#202522" : lightEnd;
	
	return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 180"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      style={{ position: "absolute", top: 0, left: 0 }}
	  opacity = {opacity}
    >
      <path
        d="M0 47.4235C0 38.0237 6.53608 29.9057 15.7703 28.1488C36.4827 24.2081 73.3424 18 100 18C126.658 18 163.517 24.2081 184.23 28.1488C193.464 29.9057 200 38.0237 200 47.4235V150.374C200 159.424 193.931 167.333 185.12 169.396C164.683 174.181 127.351 181.934 100 181.934C72.6487 181.934 35.3172 174.181 14.8798 169.396C6.06883 167.333 0 159.424 0 150.374V47.4235Z"
        fill="url(#gradientWave)"
      />
      <defs>
        <linearGradient
          id="gradientWave"
          x1="100"
          y1="18"
          x2="100"
          y2="181.934"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color1} />
          <stop offset="1" stopColor={color2} />
        </linearGradient>
      </defs>
    </svg>
  );
}