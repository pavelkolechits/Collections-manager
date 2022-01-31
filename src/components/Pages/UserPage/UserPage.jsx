import { ACTIONS } from "../../../redux/constants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CreateCollectionModal } from "../../ModalWindows/CreateCollectionModal";
import { CollectionItem } from "../../CollectionItem/CollectionItem";
import "./userpage.scss";
import { OptionsBar } from "./OptionsBar";
export const UserPage = () => {

  const state = useSelector((i) => i.mainReducer.state);
 
  return (
    <div className="userpage-wrap">
      <OptionsBar />
      <div className="list-collection-item">
        {!state?.user.collections.length ? (
          <h2>There are no collection yet</h2>
        ) : (
          state.user.collections.map((i) => (
            <CollectionItem
            collectionId={i.id}
            key={i.id}
              description={i.description}
              collectionName={i.collectionName}
              img={i.img}
            />
          ))
        )}
      </div>
    </div>
  );
};
