import classes from './TouristResortList.module.css'
import TouristResortTile from './TouristResortTile';
const TouristReosortList = ({ resortList }) => {
    console.log(resortList);
    return (
        <div className={classes.reosrts}>
            <h2 className={classes.rosort__heading}>ALL RESORTS</h2>
            {resortList && resortList.map(resort => <TouristResortTile resort={resort} />)}
        </div>
    )
}

export default TouristReosortList
