import Card from "./Card";

export default function CardList({cardList}) {
	
	return( 
	<div>
		{cardList.map((card) => (
			<Card 
				key = {card.title}
				title={card.title}
				text = {card.text}
			/> 
		
	))}
	</div>
	);
}

