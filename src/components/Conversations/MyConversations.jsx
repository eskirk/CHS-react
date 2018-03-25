import React from 'react';
import { Button } from 'react-bootstrap';
import { ConversationRow, ConfDialog, ConversationOverview } from '../index';
import './Conversations.css';

class MyConversations extends ConversationOverview {
   constructor(props) {
      super(props);
      this.state = {
         cnvs: []
      }

      this.props.getCnvsOwner(this.props.Prss.id);
   }

   showMyConversations() {
      var conversations = [];

      this.props.Cnvs.forEach(element => {
         console.log(this.props.Prss);
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

   // actually creates the new conversation
   createConversation(title) {
      var body = {
         title: title
      }
      this.props.postCnv(body);
      this.props.getCnvs();
   }

   // actually updates the conversation title
   updateConversation(title) {
      var body = {
         title: title
      }

      this.props.putCnv(this.state.curCnvId, body);
      setTimeout(() => {
         this.props.getCnvsOwner(this.props.Prss.id);
      }, 500);
   }

   render() {
      return (
         <div className='container' >
            {this.props.Cnvs.length ?
               [
                  <div className='container' key={0}>
                     <h1>My Conversations</h1>
                     <hr />
                     {this.showMyConversations()}
                     <hr />
                  </div>
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
                        this.deleteConversation(this.state.input.value);
                     this.setState({ deleteConversation: false });
                  }}
               />
               :
               ''
            }
         </div>
      );
   }
}

export default MyConversations;