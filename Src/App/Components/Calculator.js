import React from 'react';
import { render } from 'react-dom';
import "../../Stylesheets/CalculatorStyle.css";
export class Calculator extends React.Component{
	render(){
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
								<div className="single-button">
									<p>1</p>
								</div>
								<div className="single-button">
									<p>2</p>
								</div>
								<div className="single-button">
									<p>3</p>
								</div>
								<div className="single-button">
									<p>+</p>
								</div>
								<div className="single-button">
									<p>4</p>
								</div>
								<div className="single-button">
									<p>5</p>
								</div>
								<div className="single-button">
									<p>6</p>
								</div>
								<div className="single-button">
									<p>-</p>
								</div>
								<div className="single-button">
									<p>7</p>
								</div>
								<div className="single-button">
									<p>8</p>
								</div>
								<div className="single-button">
									<p>9</p>
								</div>
								<div className="single-button">
									<p>X</p>
								</div>
								<div className="single-button">
									<p>C</p>
								</div>
								<div className="single-button">
									<p>0</p>
								</div>
								<div className="single-button">
									<p>=</p>
								</div>
								<div className="single-button">
									<p>/</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>);
	}
}