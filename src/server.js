import './App.css';
import { Menu } from './comfonent/menu';
import Contents from './comfonent/contents';
import { Home } from './contents/home';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Login from './contents/Login';
import Index from './contents/Index'
import App from './contents/temp/App'
//import './comfonent/mongo'

export const Server = props => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
      <Route path="/Home" component={Home}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Index" component={Index}></Route>
        <Route path="/App" component={App}></Route>
      <Contents />
      </Switch>
    </BrowserRouter>
  )
}