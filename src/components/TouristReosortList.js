import classes from './TouristResortList.module.css'
import TouristResortTile from './TouristResortTile';
const TouristReosortList = ({ resortList }) => {
    return (
        <div className={classes.reosrts_list}>
            {resortList && resortList.map(resort => <TouristResortTile resort={resort} key={resort.key} />)}
        </div>
    )
}

export default TouristReosortList
