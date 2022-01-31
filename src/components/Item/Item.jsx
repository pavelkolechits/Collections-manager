import "./item.scss";
import { Button } from "react-bootstrap";

export const Item = ({ src }) => {
  return (
    <div className="item-wrap">
      <embed className="item-contant" src={src}></embed>
      <div className="button-wrap">
        <Button variant="outline-light">Delete</Button>
        <Button variant="outline-light">Edit</Button>
        <Button variant="outline-light">Open</Button>
      </div>
    </div>
  );
};
