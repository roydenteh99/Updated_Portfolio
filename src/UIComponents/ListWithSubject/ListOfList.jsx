import ListWithSubject from "./ListWithSubject";
import CardFlip from "../CardFlip/CardFlip";


export default function ListOfList({ list_of_list = [], field = "All" }) {
    
    // 1. Filtering logic remains the same
    const filtered_list = list_of_list.filter(single_list =>
        field === "All" ? true : single_list.fields.includes(field)
    );

    return (
        <div className="flex flex-col  md:flex-row items-center gap-2 md:gap-20 flex-wrap  p-4">
            {filtered_list.map((single_list, index) => {
                
                // 2. Define the content for the back of the card
                const frontContent = (
                    <div className="p-4 text-center justify-items-center rounded-xl border-4  w-full h-full bg-yellow-200/25">
                        <h2 className="text-xl font-bold">
                            {single_list.subject || 'List Info'} 
                        </h2>
						<img 
							src={single_list.iconPath} 
							alt={'Icon'} 
							className=" w-25 h-25 object-contain"
						/>
                        <h3 className="text-sm text-black-200 mt-2">
							<br/>
                            Click to reveal more details

                        </h3>
                    </div>
                );

                // 3. Define the content for the front of the card
                // This is your existing ListWithSubject component.
                const backContent = <div className="border-4 rounded-xl w-full h-full h-full bg-yellow-200/25">
				 <ListWithSubject data={single_list} />
				 </div>;
                
                return (
                    <div key={index} className="">
                        <CardFlip 
                            // 4. Pass the ListWithSubject component as the Front Side
                            frontContent={frontContent} 
                            // 5. Pass the metadata/summary component as the Back Side
                            backContent={backContent} 
                        />
                    </div>
                );
            })}
        </div>
    );
}
