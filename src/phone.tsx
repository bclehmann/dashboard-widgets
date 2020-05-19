import * as React from "react";
import "./phone.css";

export interface PropType {
	small : boolean;
	children : React.JSX.ElementChildrenAttribute ;
}

const Phone : React.Component = (props : PropType) => {
    if (!props.small) {
        return (
            <div style={{ width: "100%" }}>
                <div className="phone-container">
                    <div className="phone-top" />
                    <div className="speaker" />
                    <div className="screen-content">{props.children}</div>
                    <div className="home-button" />
                    <div className="phone-bottom" />
                </div>
            </div>
        );
    } else {
        return (
            <div style={{ width: "100%" }}>
                <div className="phone-container phone-container-small" style={{height:"500px", width:"300px"}}>
                    <div className="screen-content" style={{height:"342px"}}>{props.children}</div>
                </div>
            </div>
        );
    }
};

export default Phone as (props : PropType) => React.Component