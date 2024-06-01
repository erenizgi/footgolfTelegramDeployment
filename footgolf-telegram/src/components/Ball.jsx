import {useState} from "react";
import ball from '../assets/main scene/football.png'
import './Ball.css'

const Ball = (props) => {
    const [xLoc, setXLoc] = useState(props.xLoc);
    const [yLoc, setYLoc] = useState(props.yLoc);
    let style = {
        position: "relative",
        left: xLoc,
        top: yLoc
    }


    return (
        <div className="ball" style={style} onClick={() => console.log(xLoc, yLoc)}>
            <img src={ball} alt="ball"/>
        </div>
    )
}

export default Ball;