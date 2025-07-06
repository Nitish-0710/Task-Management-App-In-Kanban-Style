import "../Styles/AddButton.css";
import React from "react";
import { theme } from "./Theme";

function AddButton(props) {
    const colors = theme[props.status];

    const [isHovered, setIsHovered] = React.useState(false);
    // const darkerColor = `color-mix(in srgb, ${props.bgcolor}, black 5%)`;

    return (
        <>
            <button
                className={`Btn mx-auto ${props.class}-addBtn`}
                style={{
                    backgroundColor: props.bgcolor,
                    // backgroundColor: props.bgcolor,
                }}
                onClick={props.showModal}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div
                    className="sign"
                    style={{ color: props.darkMode ? "#ffffff" : "#3a4b56" }}>
                    +
                </div>
                <div
                    className="text"
                    id={props.buttonId}
                    style={{ color: props.darkMode ? "#ffffff" : "#3a4b56" }}>
                    Add
                </div>
            </button>
        </>
    );
}

export default AddButton;
