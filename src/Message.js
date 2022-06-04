import React from "react";
import "./message.css";
import { Avatar } from "@material-ui/core";

const Message = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          MakerOfMagic
          <span className="message__timestamp"></span>
        </h4>

        <p>This is a message</p>
      </div>
    </div>
  );
};

export default Message;
