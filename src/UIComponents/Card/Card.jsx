function Card({title, detail, img}){
    return(
        <div className="card">
            <img className="card-image" src={img} alt="Profile Picture"></img>
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{detail}</p>
        </div>
    )
}


export default Card