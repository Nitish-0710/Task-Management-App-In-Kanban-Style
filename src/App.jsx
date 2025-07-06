import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Board from "./Components/Board";
import { DndProvider } from "react-dnd";
import MyNavbar from "./Components/MyNavbar";
import { getBackend } from "./Utils/dndBackend";
import { DarkModeProvider } from "./Context/DarkModeContext";


function App() {
    return (
        <>
            <DarkModeProvider>
                <MyNavbar />
                <DndProvider backend={getBackend()}>
                    <Board />
                </DndProvider>
            </DarkModeProvider>
        </>
    );
}

export default App;
