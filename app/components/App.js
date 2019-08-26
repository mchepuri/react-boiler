import React,{Suspense} from 'react';
//import Cards from '../../itunes/Cards';
import styles from './app.style.js';
class App extends React.Component {
        constructor(props) {
                super(props);
        }
        render() {
                console.log(styles);
                return (
                        <div>
                        <style jsx>{styles}</style>
                        <div className='app'>
                                <div className='sassyDiv' >Get Sassy!</div>
                        </div>
                        </div>
                );
        }

}
export default App;
