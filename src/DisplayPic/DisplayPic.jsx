import styles from "./DisplayPic.module.css"
import displayPic from "./DisplayPic.svg"

function DisplayPic() {

    return(<>
        <img src = {displayPic} 
        className= {styles.DisplayPic}
        alt = "MyDisplayPic" />
        </>
    )

}

export default DisplayPic