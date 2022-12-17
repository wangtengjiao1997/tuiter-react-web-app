
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import JustworksTest from "./JustworksTest";
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index
                           element={<JustworksTest/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;

