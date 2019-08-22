import React,{Suspense} from 'react';
//import Cards from '../../itunes/Cards';
import styles from '../styles/app.scss';
class App extends React.Component {
        constructor(props) {
                super(props);
        }
        render() {
                return (
                        <div className={styles.app}>
                                <div className={styles.sassyDiv}>Get Sassy!</div>
                        </div>
                );
        }

}
export default App;
