import './App.css';
import { Menu } from './comfonent/menu';
import Contents from './comfonent/contents';
import { Home } from './contents/home';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Login from './contents/login';

export const Server = props => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
      <Route path="/Login" component={Login}></Route>
      <Route path="/Home" component={Home}></Route>
        <Contents />
      </Switch>
    </BrowserRouter>
  )
}