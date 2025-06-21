import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        message: "안녕 오늘의 일정은",
    },
    {
        message: "점심식사시간",
    },
    {
        message: "곧 미팅 시작",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            notifications: [],
        };
    }
    componentDidMount() {
        const {notifications} = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                clearInterval(timer);
            }
        }, 1000
        );
    }
    componentWillUnmount(){
        if (timer) {
            clearInterval(timer);
        }
    }
    render(){
        return (
            <div>
                {this.state.notifications.map((notification)=> {
                    return <Notification message = {notification.message} />;
                })}
            </div>
        )
    }
}

export default NotificationList;