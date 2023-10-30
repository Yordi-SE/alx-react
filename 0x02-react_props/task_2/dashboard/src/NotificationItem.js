import React from 'react';

export default class NotificationItem extends React.Component {
    render() {
        if (this.props.html) {
            return (
                <>
                <li data-priority='1' data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html}></li>
            </>
            )
        }

        return (
            <>
            <li data-notification-type={this.props.type} >{this.props.value}</li>
        </>
        )
    }
}