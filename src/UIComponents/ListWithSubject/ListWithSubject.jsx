export default function ListWithSubject({data}) {
	
	const subject = data.subject
	const list = data.list
	const listForHtml = list.map((item, index) => 
		item.length == 1 ?   
		<li key={index}><span>{item[0]}</span></li> :
		<li key={index}><span><a href={item[1]}>{item[0]}</a></span></li>)


	return(
	<div className="flex flex-col">
	<h2 >{subject}</h2>
		<ul class="list-disc pl-5">
			{listForHtml}
		</ul>
	</div>
		)
}

ListWithSubject.defaultProps = {
    data : {subject:"",list:[]}

}