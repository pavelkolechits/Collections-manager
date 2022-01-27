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
  const navigate = useNavigate();
  const state = useSelector((i) => i.mainReducer.state);
  const dispatch = useDispatch();
  const handleInput = (event) => {
    const files = Array.from(event.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        console.log(event.target.result);
        dispatch({
          type: ACTIONS.SEND_ITEM,
          item: event.target.result,
          id: state.user._id,
        });
      };
      reader.readAsDataURL(file);
    });
  };

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

            key={i.collectionId}
              description={i.description}
              collectionName={i.collectionName}
              img={i.img}
            />
          ))
        )}
      </div>
      {/* <input multiple onChange={handleInput} type="file" /> */}
    </div>
  );
};
