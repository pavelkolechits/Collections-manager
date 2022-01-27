import { NavBar } from "../../NavBar/NavBar";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../../redux/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CollectionItem } from "../../CollectionItem/CollectionItem";
import "./homepage.scss";
export const HomePage = () => {
  const users = useSelector((i) => i.mainReducer.users);
  const allcollecton = [];
  if (users) {
    users.forEach((i) => allcollecton.push(i.collections));
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_ALL_USERS });
  }, []);
  return (
    
    <div className="home-page">
      {!users ? "Loading..." :
        allcollecton
          .flat(1)
          .map((i) => (
            <CollectionItem
            disabled={true}
            key={i.id}
            collectionId={i.id}
              description={i.description}
              collectionName={i.collectionName}
              img={i.img}
            />
          ))}
    </div>
   
  );
};
