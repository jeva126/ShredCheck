// import logo from './logo.svg';
import './App.css';
import HomeScreen from "./pages/HomeScreen";
import Mountain from "./pages/Mountain";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>

            <Route exact path="/mountain">
                <Mountain />
            </Route>

            <Route exact path="/home">
                <HomeScreen />
            </Route>
        </Switch>
    </BrowserRouter>
);
}

export default App;
