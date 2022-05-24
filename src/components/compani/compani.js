import bcd from '../../images/bcd.jpg';
import stack from '../../images/stackjunction.jpeg';
import expanse from '../../images/expanse.png';
import blockchain from '../../images/blockchainpk.jpg';
import foxnib from '../../images/foxnib.jpg';
import elum from '../../images/elum.png';
import './compani.css';

function Compani (){
    return(
        <section id="section4">
        <div className="container">
            <div>
                <h2 className="title">I'm proud to have collaborated with some awesome companies:</h2>
                <div className="cards_container">
                    <figure className="card">
                        <img src={bcd}/>
                    </figure>
                    <figure className="card">
                        <img src={stack}/>
                    </figure>
                    <figure className="card">
                        <img src={expanse}/>
                    </figure>
                    <figure className="card">
                        <img src={blockchain}/>
                    </figure>
                    <figure className="card">
                        <img src={foxnib}/>
                    </figure>
                    <figure className="card">
                        <img src={elum}/>
                    </figure>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Compani;