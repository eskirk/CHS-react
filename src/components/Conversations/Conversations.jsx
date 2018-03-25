import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ConfDialog } from '../index';
import { ConversationRow } from '../index';
import './Conversations.css';

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

   // render a conversation component for each conversation in the DB
   displayConversations() {
      var conversations = [];

      this.props.Cnvs.forEach(element => {
         conversations.push(
            <ConversationRow
               key={element.id}
               title={element.title}
               lastMessage={element.lastMessage}
               cnvId={element.id}
               cnvOvw={this}
               owner={this.props.Prss.id === element.ownerId}
               admin={this.props.Prss.role}
            />
         )
      });

      return conversations;
   }

   // displays the message creation dialog 
   newConversation() {
      this.setState({ createNewConversation: true });
   }

   // actually creates the new conversation
   createConversation(title) {
      var body = {
         title: title
      }

      this.props.postCnv(body);
      this.props.getCnvs();
   }

   // displays the confirmaton dialog to delete a conversation
   deleteCnvConfirmation(cnvId) {
      this.setState({ deleteConversation: true });
      this.setState({ curCnvId: cnvId });
   }

   // actually deletes the conversation
   deleteConversation(cnvId) {
      this.props.delCnv(this.state.curCnvId);
      this.props.getCnvs();
   }

   // called form the conversation edit button, saves the cnvId to be used
   // with updateConversation()
   changeConversation(cnvId) {
      this.setState({ editConversation: true });
      this.setState({ curCnvId: cnvId });
   }

   // actually updates the conversation title
   updateConversation(title) {
      var body = {
         title: title
      }

      this.props.putCnv(this.state.curCnvId, body);
      setTimeout(() => {
         this.props.getCnvs();
      }, 500);
   }

   conversationDetails(cnvId, cnvTitle) {
      this.props.history.push('/CnvDetail/' + cnvId);
      this.setState({ 
         curCnvId: cnvId
      });
   }

   render() {
      return (
         <div className='container'>
            {this.props.Cnvs.length ?
               [
                  <section className='container' key={0}>
                     <h1>Conversation Overview</h1>
                     <hr />
                     {this.displayConversations()}
                     <hr />
                  </section>
               ]
               :
               <h4>You have no conversations, make one!</h4>
            }
            <br />
            <Button bsStyle='primary' bsSize='large' onClick={() =>
               this.newConversation()}>
               New Conversation
            </Button>

            {/* Show this confDialog if we are creating a new conversation */}
            {this.state.createNewConversation ?
               <ConfDialog
                  show={this.state.createNewConversation}
                  title={'Create a new conversation'}
                  body={'Enter the title of the new conversation'}
                  buttons={['SUBMIT', 'CANCEL']}
                  form={this.state}
                  onClose={answer => {
                     this.setState({ createNewConversation: false });
                     if (answer === 'SUBMIT')
                        this.createConversation(this.state.input.value);
                  }}
               />
               :
               ''
            }

            {/* Show this confDialog if we are editing a conversation */}
            {this.state.editConversation ?
               <ConfDialog
                  show={this.state.editConversation}
                  title={'Change the conversation title'}
                  body={'Enter the new title of the conversation'}
                  buttons={['SUBMIT', 'CANCEL']}
                  form={this.state}
                  onClose={answer => {
                     this.setState({ editConversation: false });
                     if (answer === 'SUBMIT')
                        this.updateConversation(this.state.input.value);
                  }}
               />
               :
               ''
            }

            {/* Display this confDialog if we are deleting a message */}
            {this.state.deleteConversation ?
               <ConfDialog
                  show={this.state.deleteConversation}
                  title={'Are you sure you want to delete this conversation?'}
                  buttons={['DELETE', 'CANCEL']}
                  onClose={answer => {
                     if (answer === 'DELETE')
                        this.deleteConversation(this.state.curCnvId);
                     this.setState({ deleteConversation: false });
                  }}
               />
               :
               ''
            }
         </div>
      )
   }
}

export default ConversationOverview;