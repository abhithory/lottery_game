import React from 'react'
import "../css/ticket.css"


export default function OneTicketUserHave(props) {
    const {ticketNo,by} = props;
    return (
        <div className="ticketBg glow-div2">
            <div className="my-auto">
                <p>Ticket No.</p>
                <h2>{ticketNo}</h2>
                <p style={{fontSize:10}}>{by}</p>
            </div>
        </div>
    )
}
