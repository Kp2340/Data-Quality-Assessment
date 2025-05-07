import {Routes, Route, HashRouter} from "react-router-dom";
import CompletenessCheck from "./CompletenessCheck";
import DomainCheck from "./DomainCheck";
import FormatCheck from "./FormatCheck";

function App() {
    return (
        <HashRouter>
            <Routes>
                {/*<Route path="/" element={<CompletenessCheck/>} />*/}
                <Route path="/completeness" element={<CompletenessCheck/>} />
                <Route path="/format" element={<FormatCheck/>} />
                <Route path="/domain" element={<DomainCheck/>} />
            </Routes>
        </HashRouter>
    );
}
export default App;