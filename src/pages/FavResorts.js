import React from 'react'
import classes from './FavResorts.module.css'
import useFetch from '../fetchApi/useFetch';
import TouristReosortList from '../components/TouristReosortList';
const FavResorts = () => {
    const { dataDownloaded, loading, error } = useFetch(`https://sam-resots-default-rtdb.firebaseio.com/favResorts.json`);
    return (
        <div>
            <h2 className={classes.rosort__heading}>ALL RESORTS</h2>
            {loading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {dataDownloaded && dataDownloaded.length === 0 ? <h3>No Favourites Yet</h3> : null}
            <TouristReosortList resortList={dataDownloaded} />
        </div>
    )
}

export default FavResorts
