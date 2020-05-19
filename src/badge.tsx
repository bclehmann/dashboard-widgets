import * as React from 'react';
import './badge.css';

export interface PropTypes {
	size : number,
	type : string,
	number : number,
	stroke : string,
	subtitle : string
}

const Badge = props => {
	let size : number = props.size !== undefined ? props.size : 120;
	let type : string = props.type !== undefined ? props.type.toUpperCase() : "HOLLOW";
	let numberFormatted : string = props.number.toString();
	let number : number = props.number;
	let fontSize : string = '3em';
	let topOffset : string = '-100px'
	let leftOffset : string = '30px'
	let subtitleOffset : string = '-3.6em'
	
	if(Math.abs(number) >= 10){
		number = Math.round(number);
		numberFormatted = number.toString();
	}
	
	if(number >= 0){
		if(number < 10 && !numberFormatted.includes('.')){
			numberFormatted = number + '.0';
		}else if(number < 100){
			leftOffset = '35px';
		}else{ 
			if(number < 1000){
				fontSize = '2.3em';
				subtitleOffset = '-3em';
				topOffset = '-2.5em';
			}else{
				fontSize = '2em';
				subtitleOffset = '-2.5em';
				leftOffset = '25px';
				topOffset = '-2.7em';
			}
		}
			
	}else {
		leftOffset = '25px'
		if(number > -10 && !numberFormatted.includes('.')){
			numberFormatted = number + '.0';
			leftOffset = '18px'
		}else if(number > -100){
			leftOffset = '18px'
		}else if(number > -1000){
			fontSize = '2.4em';
			topOffset = '-2.4em';
			leftOffset = '20px';
			subtitleOffset = '-3em'
		}else{
			fontSize = '1.9em';
			topOffset = '-2.8em';
			leftOffset = '20px';
			subtitleOffset = '-2.4em'
		}
	}
	
	return (
		<div className="circle-container">
		  <svg className="circle-svg" height={size} width={size} style={{ stroke: props.stroke }}>
			<circle className="circle" strokeWidth="10" fill={type.toUpperCase() == "HOLLOW" ? "transparent" : props.stroke} r="45" cx="60" cy="60" />
		  </svg>
		  <span className="circle-number" style={{fontSize : fontSize, top : topOffset, left : leftOffset}}>
			{numberFormatted}
		  </span>
		  <div className="badge-subtitle" style={{top : subtitleOffset }}>{props.subtitle}</div>
		</div>
	);
}

export default Badge as (props : PropTypes) => React.Component;
