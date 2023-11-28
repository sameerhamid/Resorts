import { createContext } from "react";
import useFetch from "../fetchApi/useFetch";

const MyFavouriteContext = createContext({
    favResot: [],
    totalFavResorts: 0,
    isFavResort: (resortKey) => { },
    removeFavResort: (resortKey) => { },
    addFavResort: (resort) => { },
    loading: false,
    error: ''

})

export const MyFavouriteContextProvider = (props) => {
    const { dataDownloaded, loading, error } = useFetch(`https://sam-resots-default-rtdb.firebaseio.com/favResorts.json`);

    const isFavResortHandler = (resortKey) => {
        return (dataDownloaded && dataDownloaded.some(fr => fr.key === resortKey)
        )
    }

    const addFavResortHandler = (resort) => {
        fetch(`https://sam-resots-default-rtdb.firebaseio.com/favResorts/${resort.key}.json`, {
            method: 'PATCH',
            body: JSON.stringify(resort),
            ContentType: 'application/json',
        }).then(() => {
            window.location.reload();
        })
    }

    const removeFavResortHandler = (resortKey) => {
        fetch(`https://sam-resots-default-rtdb.firebaseio.com/favResorts/${resortKey}.json`, {
            method: 'DELETE',
        }).then(() => {
            window.location.reload()
        })
    }

    const context = {
        favResot: dataDownloaded && dataDownloaded,
        totalFavResorts: dataDownloaded && dataDownloaded.length,
        isFavResort: isFavResortHandler,
        addFavResort: addFavResortHandler,
        removeFavResort: removeFavResortHandler,
        loading: loading,
        error: error
    }
    return <MyFavouriteContext.Provider value={context}>
        {props.children}
    </MyFavouriteContext.Provider>
}

export default MyFavouriteContext