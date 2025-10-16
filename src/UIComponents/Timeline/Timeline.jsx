import { useEffect, useState } from 'react';

import { Chrono } from 'react-chrono';




export default function Timeline({timelineData, field}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Convert each item to include MarkdownComponent
    const newItems = timelineData
	.filter((item) => item.fields.includes(field))
	.map((item) => ({
      ...item,
	  title : item.providedDate ? titleAndDate(item["cardTitle"], item["providedDate"]) : item["title"]
    }));
    setItems(newItems);
	console.log("field change");
	console.log({field});
  }, [timelineData ,field]);



return (
    <div
      className="
        w-full 
        h-[500px]
        overflow-x-auto 
        scroll-smooth 
        [scrollbar-width:none] 
        [-ms-overflow-style:none]
        no-scrollbar
      "
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {items.length > 0 && (
        <div className="min-w-[3000px]">
          <Chrono
            items={items}
            mode="HORIZONTAL"
			cardWidth ={250}
			itemWidth = {280}
            showAllCardsHorizontal={true}
            disableToolbar={true}
            useReadMore={true}
          />
        </div>
      )}
    </div>
  );
}

function titleAndDate(title, date) {
  return (
    <div className="flex flex-col items-start">
      <h3 className="font-semibold text-base">{title}</h3>
      <p className="text-sm ">{date}</p>
    </div>
  );
}