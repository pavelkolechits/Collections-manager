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
    console.log(event);
  };
  const state = useSelector((i) => i.mainReducer.state);
 console.log(state.user._id)
  const dispatch = useDispatch();
  const creteCollection = () => {
    dispatch({
      type: ACTIONS.CREATE_COLLECTION,
      collectionName,
      description,
      dataImg,
      id: state.user._id
    });
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
                <img
                  style={{
                    position: "fixed",
                    width: "200px",
                    height: "100px",
                    top: "50px",
                    left: "0",
                    right: "0",
                    margin: "auto",
                    cursor: "grab",
                  }}
                  src={books}
                  alt=""
                />
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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
                <img
                  style={{
                    position: "fixed",
                    width: "200px",
                    height: "100px",
                    top: "50px",
                    left: "0",
                    right: "0",
                    margin: "auto",
                    cursor: "grab",
                  }}
                  src={foto}
                  alt=""
                />
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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
                <img
                  style={{
                    position: "fixed",
                    width: "200px",
                    height: "100px",
                    top: "50px",
                    left: "0",
                    right: "0",
                    margin: "auto",
                    cursor: "grab",
                  }}
                  src={Video}
                  alt=""
                />
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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
                <img
                  style={{
                    position: "fixed",
                    width: "200px",
                    height: "100px",
                    top: "50px",
                    left: "0",
                    right: "0",
                    margin: "auto",
                    cursor: "grab",
                  }}
                  src={unnamed}
                  alt=""
                />
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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
      <h2 style={{ position: "absolute", zIndex: "2", top: "0" }}>
        drag image from here
      </h2>
      <CreateCollection />

      <CloseButton onClick={() => navigate("/user-page")} className="close-button-back" />
    </div>
  );
};
