import React,{Suspense} from 'react';
import {Shell} from './layout/shell';
import {Navigation} from './navigation/nav';
import {IdentitySection} from './identity/identity';
import { Hamburger } from './identity/hamburger/hamburger';
import {Results} from './resultspage/results';
import './app.css';
import { Provider } from 'react-redux';
import store from '../app_state/store';

//import './nav.css';
export  const App = () =>{
        return(
        <div className="app"> 
                {/*Change me*/}
                <Provider store={store}>
                        <Shell logo={<img className="logo" src=""/>}
                                menu={<Navigation/>}
                                identitySection={ <IdentitySection/>}
                                hamburger={<Hamburger/>}>
                                <Results/>              
                        </Shell>
                </Provider>
        </div>
        );
}

export default  App;