import React from 'react';
class App extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        data: 'hello'
                }
        }
        render() {
                return (<div>{this.state.data}</div>);
        }
}
export default App;
