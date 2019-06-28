import React from 'react';
import { render } from 'react-dom';
import "../../Stylesheets/CalculatorStyle.css";
export class Calculator extends React.Component{	
	render(){
		const numbers=["1","2","3","+","4","5","6","-","7","8","9","X","C","0","=","/"];
		return(
			<div>
				<div className="top-page">
					<div className="top-inside">
						<div className="screen-out">
							<h4>56+14</h4>
							<h2>70</h2>
						</div>
						<div className="button-whole">
							<div className="button-in">
								{numbers.map(number=>
									<div className="single-button">
										<p>{number}</p>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>);
	}
}