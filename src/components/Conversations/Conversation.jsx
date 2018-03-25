import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Row } from 'react-bootstrap';
import './Conversations.css';

/**
 * Properties expected:
 * cnvId: int, the conversation ID
 */
class Conversation extends Component {
   constructor(props) {
      super(props);

      this.state = {
         msgs: [],
         showMessage: true
      }
      // get the cnvId from the path.... this works well I think
      this.cnvId = this.props.location.pathname.split('/')[2];
      this.props.getCnv(this.cnvId);

      setTimeout(() => {
         this.setState({
            title: this.props.Cnvs.title
         });
         this.props.getMsgs(this.cnvId);
      }, 500);
      this.showMessages();
   }

   handleChange(event) {
      const newState = {}
      newState[event.target.name] = event.target.value;
      this.setState(newState);
   }

   toggleMessage() {
      this.setState({
         showMessage: !this.state.showMessage
      });
   }

   showMessages() {
      var messages = [];

      this.props.Cnvs.forEach((message) => {
         messages.push(
            <Row key={message.id}>
               <span>
                  {message.email || this.state.title ?
                     [
                        <div key={message.id}>
                           <Row className='messageTitle'
                            onClick={() => this.toggleMessage()}>
                              {Intl.DateTimeFormat('en-US').format(
                                 new Date(message.whenMade))}: 
                                  <b>{message.email}</b>
                           </Row>
                           <Row className=
                            {this.state.showMessage ? '' : 'hidden'} >
                              <span>
                                 {message.content}
                              </span>
                           </Row>
                        </div>
                     ]
                     :
                     ""
                  }
               </span>
               <hr />
            </Row>
         )
      })

      return messages;
   }

   sendMessage(content) {
      var body = {
         content: content.value
      }

      this.props.postMsg(this.cnvId, body);
      this.props.getMsgs(this.cnvId);
      setTimeout(() => {
         this.showMessages();
      }, 200);
      content.value = "";
   }

   render() {
      return (
         <div className='container'>
            <h2>
               {this.state.title}
            </h2>
            <hr />
            <div>
               {this.props.Cnvs.length ?
                  [
                     <div key={0}>
                        {this.showMessages()}
                     </div>
                  ]
                  :
                  [
                     'No messages in this conversation'
                  ]
               }
            </div>
            <hr />
            <div>
               <Row>
                  <FormGroup controlId='newMessage'>
                     <FormControl inputRef={(value) => { this.input = value }}/>
                  </FormGroup>
               </Row>
               <Row>
                  <Button bsStyle='primary' bsSize='large' onClick={() =>
                     this.sendMessage(this.input)}>
                     Send Message
                  </Button>
               </Row>
            </div>
         </div>
      )
   }
}

export default Conversation;