import React, { Component } from 'react';
import { Col, Row, Glyphicon, Button } from 'react-bootstrap';
import './Conversations.css';

/** 
 * Properties expected:
 * title: String, name of conversation
 * lastMessage: int, time last message was posted
*/
class ConversationRow extends Component {
   render() {
      return (
         <div>
            <Row className='conversationRow'>
               <Col sm={10}>
                  <h3 onClick={() => this.props.cnvOvw.conversationDetails(
                   this.props.cnvId, this.props.title)} 
                   className='cnvTitle' to='/msgs'>
                     {this.props.title}
                  </h3>
                  <span>
                     {this.props.lastMessage ?
                        'Last message: ' + Intl.DateTimeFormat('en-US').format(
                         new Date(this.props.lastMessage))
                     :
                        ['No messages']
                     }
                  </span>
               </Col>

               <Col sm={2}>
                  {this.props.owner || this.props.admin ?
                     <div>
                        <Button bsSize='xsmall' bsStyle='info' onClick={() =>
                           this.props.cnvOvw.changeConversation(
                            this.props.cnvId)}>
                           <Glyphicon glyph='glyphicon glyphicon-pencil' /> Edit
                        </Button>
                        <Button bsSize='xsmall' bsStyle='info' onClick={() =>
                           this.props.cnvOvw.deleteCnvConfirmation(
                            this.props.cnvId)}>
                           <Glyphicon glyph='glyphicon glyphicon-remove' /> 
                            Remove
                        </Button>
                     </div>
                  :
                     ''
                  }
               </Col>
            </Row>
         </div>
      )
   }
}

export default ConversationRow;