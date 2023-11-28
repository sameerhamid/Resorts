import React from 'react'
import classes from './TouristResortTile.module.css'
const TouristResortTile = ({ resort }) => {
    return (
        <div className={classes.reost__list}>
            <div><img src={resort.imageUrl} /></div>
            <div className>
                <h2>{resort.title}</h2>
            </div>
            <div className={classes.resort__desc}>
                {resort.description}
            </div>
            <button>Add To Favourite</button>
        </div>
    )
}

export default TouristResortTile
