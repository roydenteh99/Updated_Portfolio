import { useEffect, useState } from 'react';
import { Chrono } from 'react-chrono';
import MarkdownComponent from '../MarkdownComponent/MarkdownComponent';

export default function Timeline({ timelineData ,field }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Convert each item to include MarkdownComponent
    const newItems = timelineData.map((item) => ({
      ...item,
      cardDetailedText: <MarkdownComponent filepath={item.filePath}/>,
	  visibility : item.fields.include(field)
    }));
    setItems(newItems);
  }, [timelineData ,field]);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      {items.length > 0 && <Chrono items={items} />}
    </div>
  );
}