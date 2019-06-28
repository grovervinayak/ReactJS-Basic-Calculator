import React from "react";
import {render} from "react-dom";
import {Calculator} from "./Components/Calculator";
class App extends React.Component{
	render(){
		return(
			<div>
				<Calculator/>
			</div>
			);
	}
}

render(<App/>,window.document.getElementById("app"));