import { useEffect, useState } from 'react';




export function MyButtonGroup({buttons}) {
	 const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 240); // adjust scroll distance threshold
		};
		window.addEventListener("scroll", handleScroll);
		console.log("scroll event listener added");
	
	return () => window.removeEventListener("scroll", handleScroll);
		}, []);

	useEffect(() => {
		console.log("isScrolled changed:", isScrolled);
	}, [isScrolled]);



	return (
	<div
		className={`flex gap-4 justify-evenly flex-wrap flex-col p-2`}
		style = {isScrolled ? {position: 'fixed',  top: 0 , justifyContent: 'flex-end' ,flexDirection:"row", width : "100%" , zIndex : 100} : {}}
	>
		{buttons.map((btn) => (
		<Button
			key={btn.name}
			text={btn.name}
			link={btn.link}
			targetId={btn.targetId}
		/>
		))}
	</div>
	);
	}



export function Button({ text, link, targetId }) {
  const handleClick = () => {
    if (targetId) {
		scrollToTargetAdjusted(targetId);
    }
  };

  if (link) {
    return (
      <a href={link}>
        <button >
          <h3>{text}</h3>
        </button>
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
    >
      <h3>{text}</h3>
    </button>
  );
}

function scrollToTargetAdjusted(targetId){
    var element = document.getElementById(targetId);
    var headerOffset = 45;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}