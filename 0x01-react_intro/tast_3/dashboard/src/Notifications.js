import React from "react";
import './Notifications.css'
import { getLatestNotification } from "./utils";
import close_icon from './Close-icon.jpg'

export function Notifications() {
    return (
        <div className="Notifications">
            <button style={{float: "right"}} onClick={() => {
                console.log('Close button has been clicked')
            }} aria-label="Close"><img src={close_icon} alt=""/> </button>
            <p>
            Here is the list of notifications
            </p>
            <ul>
                <li data-priority='0' >New Course available</li>
                <li data-priority='1'>New resume available</li>
                <li dangerouslySetInnerHTML={ { __html: getLatestNotification() }}></li>
            </ul>
        </div>
    )
}