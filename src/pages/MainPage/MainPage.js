import React, {useEffect, useState} from 'react';
import background from '../../assets/backround.png'
import contLeft from '../../assets/main scene/conts/cont2.png'
import contRight from '../../assets/main scene/conts/cont1.png'
import rookie from '../../assets/ranks/endusuk.png'
import ball from '../../assets/main scene/football.png'
import frensLogo from '../../assets/main scene/frens.png'
import gem from '../../assets/main scene/gem.png'
import energy from '../../assets/main scene/şimşek.png'
import earn from '../../assets/main scene/para.png'
import rocket from '../../assets/main scene/roket.png'
import './MainPage.css'
import Ball from "../../components/Ball";
import {useNavigate} from "react-router";
class BallCoin {
    constructor(xLoc, yLoc, id) {
        this.id = id;
        this.xLoc = xLoc;
        this.yLoc = yLoc;
    }
}

let id = 0;

const createBall = () => {
    const xLoc = Math.random() * 280;
    const yLoc = Math.random() * 280;
    const Ball = new BallCoin(xLoc, yLoc, id);
    id++;
    return Ball;
}
const createMap = () => {
    const empty = []
    for (let i = 0; i < 25; i++) {
        empty.push(createBall());

    }
    return empty;
}



const MainPage = () => {
    const [rank, setRank] = useState(rookie);
    //YLOC 1-270
    //XLOC 1-280
    const [energyL, setEnergyL] = useState(1150);
    const handleEnergy = () => {
        setEnergyL(energyL-1);
    }
    const [map, setMap] = useState([]);
    const [score, setScore] = useState(0);


    useEffect(() => {
        setMap(createMap());
        console.log("qşgjqwlg");
    }, []);

    const handleMap = (map) => {
        if (energyL < 5){
            return;
        }
        setScore(score+1);
        handleEnergy();
        setMap(map);
    }


    //THIS IS FOR ENERGY REGEN.
    useEffect(() => {
        const energyInterval = setInterval(() => {
            if (energyL < 1150){
                setEnergyL(energyL+1);
            }

        }, 200);

        return () => clearInterval(energyInterval);
    }, [energyL]);


    return (
        <div className="background-container">
            <img src={background} className="background" alt="back"/>
            <div className="up-container">
                <div className="conts">
                    <img src={contLeft} className="cont-images" alt="cont"/>
                    <img src={rank} className="rank" alt="cont"/>
                    <div className="score-cont">
                        <img src={ball} className="ball" alt="ball"/>
                        <p className="score">{score}</p>
                    </div>

                </div>
                <div className="conts">
                    <img src={contRight} className="cont-images" alt="cont"/>
                    <div className="frens">
                        <img src={frensLogo} style={{width: "70px"}} alt="frens"/>
                    </div>

                </div>
            </div>
            <div className="game">
                {map.length ? map.map((ball) => {
                    return <Ball key={ball.id} map={map} handleMap={handleMap} coin={ball} ballCreate={createBall}></Ball>;
                }) : <div></div>}
            </div>
            <div className="gem-count">
                <p className="inner-blue"></p>
                <div className="gem-content">
                    <img src={gem} alt="gem" className="gem"/>
                    <div className="get-code-cont">
                        <p className="get-code">Get Secret</p>
                        <p className="get-code"> Code!</p>
                    </div>
                </div>

            </div>
            <div className="bottom-page-links">
                <img src={contLeft} alt="cont"/>
                <div className="bottom-up-bar">
                    <div className="energy-bar" style={{width: energyL/5}}>{energyL}</div>
                    <img src={energy} className="energy" alt="lightning"/>
                </div>
                <div className="buttons">
                    <button className="link-button">
                        <img src={earn} className="links" alt="money"/>
                    </button>
                    <button className="link-button">
                        <img src={frensLogo} className="links" alt="frens"/>
                    </button>
                    <button className="link-button">
                        <img src={rocket} className="links" alt="rocket"/>
                    </button>
                </div>
            </div>

        </div>
    );


}

export default MainPage;