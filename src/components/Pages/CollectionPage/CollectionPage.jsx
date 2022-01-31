import "./collectionpage.scss";
import { CloseButton, Button, Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../../redux/constants";
import { Item } from "../../Item/Item";

export const CollectionPage = () => {
  const navigate = useNavigate();
  const collection = useSelector((i) => i.mainReducer.collection);

  return (
    <div>
      <img className="collection-background" src={collection[0].img} alt="" />
      <CollectionOptions collectionId={collection[0].id} />
      <CloseButton
        onClick={() => navigate("/user-page")}
        className="close-button"
      />
      <div className="list-item">
        {collection[0].items?.map((i) => (
          <Item key={i.id} src={i.content} />
        ))}
      </div>
    </div>
  );
};

function CollectionOptions({ collectionId }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
    dispatch({ type: ACTIONS.DELETE_ITEM });
  };

  const state = useSelector((i) => i.mainReducer.state);
  const dispatch = useDispatch();
  const item = useSelector((i) => i.mainReducer.collection.item);

  const handleInput = (event) => {
    const files = Array.from(event.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        dispatch({
          type: ACTIONS.CREATE_ITEM,
          item: event.target.result,
          id: state.user._id,
          collectionId: collectionId,
        });
      };
      reader.readAsDataURL(file);
    });
  };
  const sendItem = () => {
    if (!item) {
      alert("file not loaded");
    } else {
      dispatch({ type: ACTIONS.SEND_ITEM, item });
      setShow(false);
    }
  };

  return (
    <>
      <Button
        style={{
          top: "60px",
          left: "10px",
          position: "absolute",
          zIndex: "20",
        }}
        variant="dark"
        onClick={handleShow}
      >
        New Item
      </Button>

      <Offcanvas style={{ top: "55px" }} show={show} onHide={handleClose}>
        <Offcanvas.Header
          style={{ background: "#212529", color: "#ccc" }}
          closeButton
        >
          <Offcanvas.Title>New Item</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ background: "#212529" }}>
          <input
            style={{ color: "#ccc" }}
            multiple
            onChange={handleInput}
            type="file"
          />
          <Button onClick={sendItem}>Create</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
