import '../res/menu.css';
import { NavLink } from 'react-router-dom';
export const Menu = (props) => {
    return (
        <div className="navmenu">
            <div className="temp">뭔가 들어갈듯</div>
            <div className="menu_list">
                <ul>
                    <li><NavLink className="nav-link" to="/home">HOME2</NavLink></li>
                    <li><NavLink className="nav-link" to="/Login">Login</NavLink></li>
                    <li><NavLink className="nav-link" to="#">게시판(없음)</NavLink></li>

                    <li>
                        <label for="dropchk"><span id="dropspan">드롭다운</span></label>
                        <input type="checkbox" id="dropchk" />
                        <ul class="drops">

                            <li><NavLink to="#">Drop</NavLink></li>
                            <li><NavLink to="#">Down</NavLink></li>
                            <li><NavLink to="#">Drop</NavLink></li>
                        </ul>


                    </li>
                </ul>
            </div>
        </div>
    )
}
