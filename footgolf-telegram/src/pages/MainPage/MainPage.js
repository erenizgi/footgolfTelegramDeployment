import React, {useState} from 'react';
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


const MainPage = () => {
    const [rank, setRank] = useState(rookie);


    return (
        <div className="background-container">
            <img src={background} className="background"/>
            <div className="up-container">
                <div className="conts">
                    <img src={contLeft} className="cont-images"/>
                    <img src={rank} className="rank"/>
                    <div className="score-cont">
                        <img src={ball} className="ball"/>
                        <p className="score">1111111</p>
                    </div>

                </div>
                <div className="conts">
                    <img src={contRight} className="cont-images"/>
                    <div className="frens">
                        <img src={frensLogo} style={{width: "70px"}}/>
                    </div>

                </div>
            </div>
            <div className="game">
                <Ball xLoc={0} yLoc={0}></Ball>
                <Ball xLoc={1} yLoc={100}></Ball>
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
                <img src={contLeft}/>
                <div className="bottom-up-bar">
                    <div className="energy-bar"></div>
                    <img src={energy} className="energy"/>
                </div>
                <div className="buttons">
                    <button className="link-button">
                        <img src={earn} className="links"/>
                    </button>
                    <button className="link-button">
                        <img src={frensLogo} className="links"/>
                    </button>
                    <button className="link-button">
                        <img src={rocket} className="links"/>
                    </button>
                </div>
            </div>

        </div>
    );


}

export default MainPage;