import React from 'react'
import classes from './Body.module.css'
import { Route, Routes } from 'react-router-dom'
import AllResorts from '../pages/AllResorts'
import AddResort from '../pages/AddResort'
import FavResorts from '../pages/FavResorts'
const Body = () => {
    return (
        <div className={classes.body__container}>
            <Routes>
                <Route path='/' element={<AllResorts />} />
                <Route path='/add-resort' element={<AddResort />} />
                <Route path='/fav-resort' element={<FavResorts />} />
            </Routes>
        </div>
    )
}

export default Body
