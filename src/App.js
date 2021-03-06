
import { CreateCollectionModal } from "./components/ModalWindows/CreateCollectionModal";
import { UserPage } from "./components/Pages/UserPage/UserPage";
import "./App.scss";
import { RouteComponents } from "./components/RouteComponents/RouteComponents";
import { BrowserRouter } from "react-router-dom";
import {NavBar} from './components/NavBar/NavBar'


function App() {
  return (
    <>
    
    <BrowserRouter>
    <NavBar/>
      <RouteComponents />
    </BrowserRouter>
    </>
  );
}
export default App;
