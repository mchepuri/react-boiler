import React,{Suspense} from 'react';
import './nav.css';
export  const Navigation = (props) =>{
    return(
        <ul className="gnavmenu">
            <li className="gnavmenuitem"> Buy </li>
            <li className="gnavmenuitem"> Sell </li>
            <li className="gnavmenuitem"> Mortgage </li>
        </ul>
    );
}
