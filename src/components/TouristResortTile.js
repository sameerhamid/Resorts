import classes from './TouristResortTile.module.css'
import Card from '../UI/Card'
import { useContext } from 'react'
import MyFavouriteContext from '../store/resort-context'
const TouristResortTile = ({ resort }) => {
    const myContext = useContext(MyFavouriteContext);
    const isFav = myContext.isFavResort(resort.key);
    console.log(isFav);

    const toogleFavHandler = () => {
        if (isFav) {
            myContext.removeFavResort(resort.key)
        } else {
            myContext.addFavResort(resort)
        }
    }
    return (
        <Card>
            <div><img src={resort.imageUrl} /></div>
            <div className>
                <h2>{resort.title}</h2>
            </div>
            <div className={classes.resort__desc}>
                {resort.description}
            </div>
            <button onClick={toogleFavHandler}>{isFav ? 'Remove From Favourite' : 'Add To Favourite'}</button>
        </Card>
    )
}

export default TouristResortTile
