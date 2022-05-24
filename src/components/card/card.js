

import './card.css';

function Card(props){
    return(
        <div className="column">
            <figure className="image">
                <img src={props.cardImg}/>
            </figure>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p className="mark">{props.expTitle}:</p>
            <p>{props.expItems.join(', ')}</p>
            <p className="mark">Design Tools:</p>
            <ul>
                {props.tools.map(tool =>{
                    return <li>{tool}</li>
                })}
            </ul>
        </div>

    )
};

export default Card;