import React from "react";
import './Notifications.css'
import close_icon from './Close-icon.jpg'
import NotificationItem from "./NotificationItem";
import getLatestNotification  from './utils.js'

export function Notifications({displayDrawer = true}) {
    const decide = () => {
        if (displayDrawer) {
            return (
                <>
                <div className="menuItem">
                    Your notifications
                </div>
                <div className="Notifications">
                    <button style={{float: "right"}} onClick={() => {
                        console.log('Close button has been clicked')
                    }} aria-label="Close"><img src={close_icon} alt=""/> </button>
                    <p>
                    Here is the list of notifications
                    </p>
                    <ul>
                        <NotificationItem type='default' value='New Course available'/>
                        <NotificationItem value='New resume available' type='urgent' />
                        <NotificationItem  html={ { __html: getLatestNotification() }} />
                    </ul>
                </div>
                </>
            )
        }
        else {
            return (
            <div className="menuItem">
                Your notifications
            </div>
            )
        }
    }
    return (

        <>
            {decide()}
        </>
    )
}