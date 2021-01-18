import './App.css';
import NaviBar from "./Nav Bar/navibar";
import {render} from "@testing-library/react";

function App() {
    render()
    {
        return (
            <div>
            <div className="container">
                <div className="item">
               <NaviBar/>
               </div>
            </div>
            <div>
                Body
            </div>
            <div>
                Footer
            </div>
            </div>
        );
    }
}

export default App;
