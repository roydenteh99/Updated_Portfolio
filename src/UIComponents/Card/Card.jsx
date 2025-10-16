function Card({title, text, img}){
    return(
        <div className="card">
			<div className="aspect-square overflow-hidden rounded-xl">
            <img className="card-image h-full object-cover object-left " src={img} alt="Profile Picture"></img>
			</div>
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{text}</p>
        </div>
    )
}


export default Card