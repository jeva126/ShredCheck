// import logo from './logo.svg';
import './App.css';
import homeScreen from './pages/HomeScreen'

//import Switch from 'react-router-dom'
import {
  Switch,
  Route,
  Redirect,
  MemoryRouter,
} from 'react-router-dom';


function App() {
  return (
    <MemoryRouter>
      <div className='BackGroundImage'>
        <Switch>
          <Route path='/' exact component={homeScreen} />
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </div>
    </MemoryRouter>
  );
}

export default App;
