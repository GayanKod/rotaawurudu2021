import Navbar from "./components/Navbar/Navbar"
import './App.css';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SignUp from "./components/SignUp/Register";
import Activate from "./components/SignUp/Activate";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Route path='/SignUp' exact render={props => <SignUp {...props} />} />
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
    </Router>
    </div>
  );
}

export default App;  
