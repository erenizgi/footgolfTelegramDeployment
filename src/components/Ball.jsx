import {useState} from "react";
import ball from '../assets/main scene/football.png'
import './Ball.css'

const Ball = (props) => {
    const ballCoin = props.coin;
    const [xLoc, setXLoc] = useState(ballCoin.xLoc);
    const [yLoc, setYLoc] = useState(ballCoin.yLoc);
    let style = {
        position: "relative",
        left: xLoc,
        top: yLoc
    }

    const handleDisappear = () => {
        const map1 = [];
        for (let i = 0; i < props.map.length; i++){
            if (props.map[i].id === ballCoin.id){
                console.log(ballCoin.id);
                continue;
            }
            map1.push(props.map[i]);
        }
        map1.push(props.ballCreate());
        props.handleMap(map1);

    }


    return (
        <div className="ball" style={style} >
            {/*DESKTOP = ONMOUSEENTER*/}
            <img onMouseEnter={handleDisappear} src={ball} alt="ball"/>
        </div>
    )
}

export default Ball;