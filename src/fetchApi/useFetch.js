import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [dataDownloaded, setDataDownloaded] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const abortCont = new AbortController()
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw ('Cannot fetch data from this reosurse...')
                } else {
                    return res.json()
                }
            }).then(data => {
                const bufferData = []
                for (const key in data) {
                    const value = {
                        key,
                        ...data[key]
                    }
                    bufferData.push(value)
                }
                setLoading(false)
                setDataDownloaded(bufferData);
            }).catch(err => setError(err))
    }, [url])

    console.log(dataDownloaded);
    return { dataDownloaded, loading, error }

}

export default useFetch
