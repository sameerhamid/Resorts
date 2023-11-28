import TouristReosortList from '../components/TouristReosortList';
import useFetch from '../fetchApi/useFetch'
import classes from './AllResorts.module.css'


const AllResorts = () => {
    const { dataDownloaded, loading, error } = useFetch(`https://sam-resots-default-rtdb.firebaseio.com/resorts.json`);
    return (
        <div>
            {loading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            <TouristReosortList resortList={dataDownloaded && dataDownloaded} />
        </div>
    )
}

export default AllResorts
