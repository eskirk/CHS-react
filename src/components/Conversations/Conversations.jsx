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

   displayConversations() {
      let cnvs = this.props.getCnvs();
      console.log('CNVS: ' + cnvs);
   }
 
   render() {
      return (
         <div className="container">
            <span>
               Conversations
            </span>
         </div>
      )
   }
}

export default ConversationOverview;