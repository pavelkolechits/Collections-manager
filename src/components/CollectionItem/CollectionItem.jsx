import { Card, Button } from "react-bootstrap";
import "./collectionitem.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/constants";

export const CollectionItem = ({
  img,
  description,
  collectionName,
  collectionId,
  disabled
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openCollection = () => {
    navigate(`/collection-page/${collectionId}`);
    dispatch({type: ACTIONS.GET_COLLECTION_DATA, collectionId})
  };

  return (
    <Card className="collection">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Name: {collectionName}</Card.Title>
        <Card.Text>Description: {description}</Card.Text>
        <Button disabled={disabled} onClick={openCollection} variant="dark">
          Open
        </Button>
      </Card.Body>
    </Card>
  );
};
