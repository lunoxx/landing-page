import React from "react";
import './../Assets/CSS/App.css';

export default function Footer() {
    return (
        <div className = "flex h-24 justify-center items-end text-center text-white font-bold">
            Build with <span className="text-red-500 mx-1"> ❤ </span> by {process.env.REACT_APP_CREATOR}
        </div>
    );
}