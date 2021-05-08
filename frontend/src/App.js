// import logo from './logo.svg';
import './App.css';
import HomeScreen from "./pages/HomeScreen";
import Mountain from "./pages/Mountain";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter,
  useRouteMatch
} from 'react-router-dom';
import { AppContext } from './AppContext';
import { useContext } from 'react';


function App() {
    const { mountainsLoading } = useContext(AppContext);
  return (
    <BrowserRouter>
    {mountainsLoading ? (
          <div/>
        ) : (
        <Switch>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>

            <Route path="/mountains/:id">
                <Mountain />
            </Route>

            <Route exact path="/home">
                <HomeScreen />
            </Route>
        </Switch>
        )}
    </BrowserRouter>
);
}

export default App;
