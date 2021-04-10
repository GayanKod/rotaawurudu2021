import Navbar from "./components/Navbar/Navbar"
import './App.css';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SignUp from "./components/SignUp/Register";
import Activate from "./components/SignUp/Activate";
import Login from "./components/SignIn/Login";
import ForgetPassword from "./components/SignIn/ForgetPassword";
import ResetPassword from "./components/SignIn/ResetPassword";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Route path='/SignUp' exact render={props => <SignUp {...props} />} />
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
      <Route path='/SignIn' exact render = {props => <Login {...props} />} />
      <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
      <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
      <Route path='/' exact component={Welcome}/>
    </Router>
    </div>
  );
}

export default App;  
