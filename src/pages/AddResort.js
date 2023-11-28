import React from 'react'
import classes from './AddResort.module.css'
import AddResortForm from '../components/AddResortForm'
const AddResort = () => {
    const addResortHandler = (resort) => {
        fetch(`https://sam-resots-default-rtdb.firebaseio.com/resorts.json`, {
            method: 'POST',
            body: JSON.stringify(resort)
        }).then(data => console.log(data))
    }
    return (
        <div className={classes.add__resort}>
            <h2>Add New Resort</h2>
            <AddResortForm onAddResort={addResortHandler} />
        </div>
    )
}

export default AddResort
