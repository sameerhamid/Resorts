
import { useRef } from 'react'
import classes from './AddResortForm.module.css'
const AddResortForm = ({ onAddResort }) => {
    const titleRef = useRef()
    const imageUrlRef = useRef()
    const descriptionRef = useRef()

    const formSubmitHandler = (e) => {
        e.preventDefault()
        const title = titleRef.current.value;
        const imageUrl = imageUrlRef.current.value;
        const description = descriptionRef.current.value;
        const resort = {
            title,
            imageUrl,
            description
        }
        onAddResort(resort)
        titleRef.current.value = ''
        imageUrlRef.current.value = ''
        descriptionRef.current.value = ''
    }
    return (
        <div className={classes.add__resort__form}>

            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="title">Resort Title: </label>
                    <input type="text"
                        id='title'
                        placeholder='Enter Resort Title'
                        ref={titleRef}
                    />
                </div>

                <div>
                    <label htmlFor="imgUrl">Image Url: </label>
                    <input type="text"
                        id='imgUrl'
                        placeholder='Enter Image Url'
                        ref={imageUrlRef}
                    />
                </div>

                <div>
                    <label htmlFor="description">Resort Description: </label>
                    <textarea type="text"
                        id='description'
                        placeholder='Enter Resort Description'
                        ref={descriptionRef}
                    />
                </div>
                <button><span>Add Resort</span></button>
            </form>
        </div>
    )
}

export default AddResortForm
