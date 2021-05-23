import './SeasonDisplay.css'
import React from 'react';

const seasonConfig ={
    summer:{
        text: "Lets hit the beach!",
        icon: 'sun'
    },
    winter:{
        text: "Its Chiily!",
        icon: 'snowflake'
    }
};

const getSeason =(lat,monthIndex) =>{
    let season;
    if(monthIndex > 2 && monthIndex < 9)
        season = lat >0 ? 'summer' : 'winter';
    else
        season = lat > 0 ? 'winter' : 'summer';
    
    return season;

}

const SeasonDisplay =(props) => {
    const season = getSeason(props.lat,new Date().getMonth());
    const {text,icon} = seasonConfig[season];
    return (
    <div className = {`season-display ${season}`}>
        <i className={`icon-left massive ${icon} icon`}/>
        <h1>{text}</h1>
        <i className={`icon-right massive ${icon} icon`}/>
    </div>
        )
}

export default SeasonDisplay;