import { Form, Button, CloseButton, Carousel } from "react-bootstrap";
import "./modalwindows.scss";
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../../redux/constants";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import books from "../../img/books.jpg";
import foto from "../../img/foto.jpg";
import Video from "../../img/Video.jpg";
import unnamed from "../../img/unnamed.jpg";

export const CreateCollection = ({ img }) => {
  const [collectionName, setCollectionName] = useState("");
  const [description, setDescription] = useState("");
  const [dataImg, setDataImg] = useState("");
  const handleInput = (event) => {
    setCollectionName(event.target.value);
  };
  const handleTextArea = (event) => {
    setDescription(event.target.value);
  };
  const handleInputImg = (event) => {
    setDataImg(event.target.value);
    
  };
  const state = useSelector((i) => i.mainReducer.state);
 const navigate = useNavigate()
  const dispatch = useDispatch();
  const creteCollection = () => {
    dispatch({
      type: ACTIONS.CREATE_COLLECTION,
      collectionName,
      description,
      dataImg,
      id: state.user._id,
    });
    navigate("/user-page")
  };

  return (
    <div className="create-collection">
      <Form variant="dark">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Collection name</Form.Label>
          <Form.Control
            onChange={handleInput}
            value={collectionName}
            type="text"
            placeholder="Enter collection name"
          />
        </Form.Group>
        <Form.Label>Description</Form.Label>
        <textarea
          onChange={handleTextArea}
          value={description}
          placeholder="description"
          className="description"
        ></textarea>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Image</Form.Label>
          <Form.Control
            className="input-image"
            onChange={handleInputImg}
            type="text"
            placeholder="drag image here"
          />
        </Form.Group>

        <div className="button-wrap">
          <Button onClick={creteCollection} variant="dark">
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};
export const CreateCollectionModal = () => {
  const navigate = useNavigate();

  return (
    <div className="create-collection-modal">
      <div className="carousel-wrap">
        <Carousel className="carousel">
          <Carousel.Item>
            <Carousel.Caption style={{ cursor: "default" }}>
              <div style={{ background: "#00000090" }}>
                <img className="img-for-drag" src={books} alt="" />
              </div>
            </Carousel.Caption>
            <img
              className="d-block w-100 carousel-img"
              src={books}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption style={{ cursor: "default" }}>
              <div style={{ background: "#00000090" }}>
                <img className="img-for-drag" src={foto} alt="" />
              </div>
            </Carousel.Caption>
            <img
              className="d-block w-100 carousel-img"
              src={foto}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption style={{ cursor: "default" }}>
              <div style={{ background: "#00000090" }}>
                <img className="img-for-drag" src={Video} alt="" />
              </div>
            </Carousel.Caption>
            <img
              className="d-block w-100 carousel-img"
              src={Video}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption style={{ cursor: "default" }}>
              <div style={{ background: "#00000090" }}>
                <img className="img-for-drag" src={unnamed} alt="" />
              </div>
            </Carousel.Caption>
            <img
              className="d-block w-100 carousel-img"
              src={unnamed}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <h3 style={{ position: "absolute", zIndex: "2", top: "50px" }}>
        drag image from here
      </h3>
      <CreateCollection />
      <CloseButton
        onClick={() => navigate("/user-page")}
        className="close-button-back"
      />
    </div>
  );
};
