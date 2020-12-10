
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateReport from './Views/CreateReport';
import Report from "./Views/Report";
import './App.css';
import ViewReport from "./Views/ViewReport";
import Navbar from "./Views/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
   
         
    <div className="App">
    <Navbar />
    <Switch>
    
    <Route exact path="/" component={CreateReport} />
            <Route exact path="/report" component={Report} />
            <Route exact path="/report/:name" component={ViewReport} />
            </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
