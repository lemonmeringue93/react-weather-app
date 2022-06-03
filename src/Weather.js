import React from "react";
import "./Weather.css";

export default function Weather () {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" className="form-control" placeholder="Enter a city" />
                    </div>
                    <div className="col-3">
                         <input type="submit" value="Search" className="btn-primary"/>
                    </div>
                </div>
            </form>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="" />
                    20°C
                    <ul className="aqi">
                        <li>Air Quality Index:</li>
                        <li>Humidity:</li>
                        <li>Wind:</li>
                    </ul>
                </div>
                <div className="col-6">
                    <h1>Tokyo</h1>
                    <ul>
                        <li>Friday 12:00</li>
                        <li>Mostly sunny</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}