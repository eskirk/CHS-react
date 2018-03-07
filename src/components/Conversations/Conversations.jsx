import React, { Component } from "react";
import { Col, Row, Glyphicon, Button } from "react-bootstrap";
// import { ConfDialog } from "../index";
import "./Conversations.css";

class ConversationOverview extends Component {
   constructor(props) {
      super(props);
      this.state = {
         cnvs: []
      };

      this.handleChange = this.handleChange.bind(this);
      this.displayConversations = this.displayConversations.bind(this);

      this.props.getCnvs();
   }

   handleChange(ev) {
      let newState = {};
      console.log('changing state');

      return newState;
   }

   displayConversations() {
      var conversations = [];

      this.props.Cnvs.forEach(element => {
         conversations.push(
            <Conversation
               key={element.id}
               title={element.title}
               lastMessage={element.lastMessage}
            />
         )
      });
      return conversations;
   }

   render() {
      return (
         <div className="container">
            {this.props.Cnvs.length ?
               [
                  <section className='container'>
                     <h1>Conversation Overview</h1>
                     <hr/>
                     {this.displayConversations()}
                  </section>
               ]
               :
               'Fetching conversations...'
            }
         </div>
      )
   }
}

/** 
 * Properties expected:
 * title: String, name of conversation
 * lastMessage: int, time last message was posted
*/
class Conversation extends Component {
   render() {
      return (
         <Row className="conversationRow">
            <Col sm={10}>
               <h3>
                  {this.props.title}
               </h3>
               <span>
                  {Intl.DateTimeFormat("en-US").format(new Date(this.props.lastMessage))}
               </span>
            </Col>
            <Col sm={2}>
               <Button bsSize="xsmall" onClick={() => console.log('Edit')}>
                  <Glyphicon glyph="glyphicon glyphicon-pencil" /> Edit
               </Button>
               <Button bsSize="xsmall" onClick={() => console.log('Delete')}>
                  <Glyphicon glyph="glyphicon glyphicon-remove" /> Remove
               </Button>
            </Col>
         </Row>
      )
   }
}

export default ConversationOverview;