import './Die.css'

export default function Die(props){
    return(
        <div 
        style={{backgroundColor: props.isHeld ? "#59E391" : "#FFF"}}
        className="die"
        onClick={props.holdDice}
        >
            <p 
            className="die--value"
            >{props.value}</p>
        </div>
    )
}