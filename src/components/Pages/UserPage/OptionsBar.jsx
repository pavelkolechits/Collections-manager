import "./userpage.scss";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
export const OptionsBar = () => {
  const navigate = useNavigate();
  return (
    <div className="optionsbar-wrap">
      <h3 style={{ color: "#cfc2c2" }}>Options</h3>
      <Dropdown className="dropdown-button">
        <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
          Sort by
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Date</Dropdown.Item>
          <Dropdown.Item>Size</Dropdown.Item>
          <Dropdown.Item>Name</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button className="create-collection-button"
        onClick={() => navigate("/create-collection")}
        variant="outline-success"
      >
        create collection
      </Button>
    </div>
  );
};
