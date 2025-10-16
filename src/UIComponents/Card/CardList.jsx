
import Card from "./Card";

export default function CardList({cardList , field="All"}) {
	const filteredCards = cardList.filter((card) => card.fields.includes(field));


	return( 
	<div className="flex flex-row flex-wrap gap-4 justify-center ">
		{filteredCards.map((card) => (
			<div className="
			basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4

			p-2 md:p-5
			outline outline-offset-0
			">
			<Card 
				{...card }
				key = {card.title}
				
			/> 
			</div>
		
	))}
	</div>
	);
}

