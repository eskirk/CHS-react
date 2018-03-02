import React, { Component } from "react";
// import { ConfDialog } from "../index";

import "./Conversations.css";

class ConversationOverview extends Component {
   constructor(props) {
      super(props);
      this.state = {};
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(ev) {
      let newState = {};

      return newState;
   }

   render() {
      return (
         <div className="container">
            <span>
               ConversationOverview
            </span>
         </div>
      )
   }
}

export default ConversationOverview;