import React, {useState} from 'react';
import background from '../../assets/backround.png'
import contLeft from '../../assets/main scene/conts/cont2.png'
import contRight from '../../assets/main scene/conts/cont1.png'
import rookie from '../../assets/ranks/endusuk.png'
import ball from '../../assets/main scene/football.png'
import frensLogo from '../../assets/main scene/frens.png'
import gem from '../../assets/main scene/gem.png'

import './MainPage.css'


const MainPage = () => {
    const [rank, setRank] = useState(rookie);


    return (
        <div className="background-container">
            <img src={background} className="background"/>
            <div className="up-container">
                <div className="conts">
                    <img src={contLeft} className="cont-images"/>
                    <img src={rank} className="rank"/>
                    <img src={ball} className="ball"/>
                    <p className="score">1111111</p>
                </div>
                <div className="conts">
                    <img src={contRight} className="cont-images"/>
                    <img src={frensLogo} className="frens"/>
                </div>
            </div>
            <div className="game">

            </div>
            <div className="gem-count">
                <div className="gem-count-inner">
                    <img src={gem} alt="gem" className="gem"/>
                    <p className="get-code">Get Secret Code!</p>
                </div>
            </div>

            <div className="bottom-container">


                {/*<div className="bottom-up-bar">*/}
                {/*    <div className="energy-bar">qcrqfl qkjdfkl</div>*/}
                {/*    <img src={energy} className="energy"/>*/}
                {/*</div>*/}
                {/*<div className="bottom-page-links">*/}
                {/*    <button className="link-button">*/}
                {/*        <img src={earn} className="links"/>*/}
                {/*    </button>*/}
                {/*    <button className="link-button">*/}
                {/*        <img src={frensLogo} className="links"/>*/}
                {/*    </button>*/}
                {/*    <button className="link-button">*/}
                {/*        <img src={rocket} className="links"/>*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>

        </div>
    );


}

export default MainPage;