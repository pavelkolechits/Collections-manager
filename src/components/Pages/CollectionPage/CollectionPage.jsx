import './collectionpage.scss'

import { useSelector } from "react-redux"





export const CollectionPage = () => {
    const collection = useSelector(i => i.mainReducer.collection)
  
    return (
        <div>
            <img className="collection-background" src={collection[0].img} alt="" />
        </div>
    )
}