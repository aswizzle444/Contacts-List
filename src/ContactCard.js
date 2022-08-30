import React, { useState } from "react";

const ContactCard = (props) => {
    const [showNumber, setShowNumber] = useState(false);

    return (
        <div className="contact-card">
            <img src={props.avatarUrl} alt="profile" />

            <div className="user-details">
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <button onClick={() => setShowNumber(!showNumber)}>
                    Show Phone Number
                </button>
                {showNumber ? <p>Number:{props.number}</p> : null}
            </div>
        </div>
    );
};

export default ContactCard;
