import { motion } from "framer-motion";
import {useState} from 'react';

export default function CardFlip({frontContent =<h1>front Side</h1>, backContent = <h1>Back Side</h1>}) {
	const [flipped, setFlipped] = useState(false);


  return (
    <div style={{ width: "300px", height: "300px", perspective: 1000, cursor: "pointer" }} onClick={() => setFlipped(!flipped)}>
      <motion.div
        style={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden", 
			display: "flex", alignItems: "center", justifyContent: "center"}}>
          {frontContent || <p>Front</p>}
        </div>

        <div style={{ position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden",
			 transform: "rotateY(180deg)", display: "flex", alignItems: "center", justifyContent: "center", }}>
          {backContent}
        </div>
      </motion.div>
    </div>
  );
}