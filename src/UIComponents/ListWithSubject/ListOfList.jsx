import ListWithSubject from "./ListWithSubject";

export default function ListOfList({list_of_list = [] , field ="All"}) {
	const filtered_list = list_of_list.filter(single_list =>
		field === "All" ? true : single_list.fields.includes(field))

	return(
		<div className=" flex flex-col md:flex-row">
		{filtered_list.map((single_list , index) =>
			<ListWithSubject key = {index} data={single_list} />
		
		
		)}
		</div>
	)
}
