import { useEffect, useState } from 'react';

import { Chrono } from 'react-chrono';




export default function Timeline({timelineData, field}) {
	const [items, setItems] = useState([]);
	const minWidthValue = items.length * 300;
	const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const themeColors = { All: "#a9573e", Engineering: "#287f83", Education: "#b27728", Other: "#815b82" };
	const accent = themeColors[field] || themeColors.All;
	const light_theme = {
  primary: accent,
  cardTitleColor: accent,
  titleColor: accent
			};

const dark_theme = {
  primary: "#d4876e",
  cardTitleColor: "#d4876e",
  titleColor: "#d4876e"
};

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
        <div style = {{minWidth : minWidthValue}}>
          <Chrono
            items={items}
            mode="HORIZONTAL"
			cardWidth ={250}
			itemWidth = {280}
            showAllCardsHorizontal={true}
            disableToolbar={true}
            useReadMore={true}
			darkMode={prefersDarkMode}
			theme={prefersDarkMode ? dark_theme : light_theme}

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