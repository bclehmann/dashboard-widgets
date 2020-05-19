import * as React from 'react';
import './badge.css';

const Badge = props => {
	let size = props.size !== undefined ? props.size : 120;
	let type = props.type !== undefined ? props.type.toUpperCase() : "HOLLOW";
	let numberFormatted = props.number.toString();
	let number = props.number;
	let fontSize = '3em';
	let topOffset = '-100px'
	let leftOffset = '30px'
	
	if(number > 0){
		if(number < 10 && numberFormatted.length < 2){
			numberFormatted = number + '.0';
		}else if(number < 100){
			
		}else {
			fontSize = '2.3em';
			topOffset = '-90px';
		}
	}else {
		leftOffset = '25px'
	}
	
	if(type.toUpperCase() == "HOLLOW"){
		return (
			<div className="circle-container">
			  <svg className="circle-svg" height={size} width={size} style={{ stroke: props.stroke }}>
				<circle className="circle" strokeWidth="10" fill="transparent" r="45" cx="60" cy="60" />
			  </svg>
			  <span className="circle-number" style={{fontSize : fontSize, top : topOffset, left : leftOffset}}>
				{numberFormatted}
			  </span>
			  <div className="badge-subtitle">{props.subtitle}</div>
			</div>
		);
	}
}

export default Badge;
