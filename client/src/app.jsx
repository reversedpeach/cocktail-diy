import React from 'react';
import ReactDOM from 'react-dom';
import { getAPI } from "./webAPI/webAPI"; 


const App = () => {

    const [fetchedData, setFetchedData] = React.useState(""); //Should be in the model, along with the effect below, this is now a presenter component but should be a veiw since it renders.

    React.useEffect( () => {
        getAPI().then(data => {
         setFetchedData(data);
        }).catch(e => console.log(e));
     }, [])

    return <div>Hello World <div>{`     ${fetchedData}`}</div></div>
}

export default App;

ReactDOM.render(<App/>, document.querySelector("#app"));