import React, { PureComponent } from 'react';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

/**
 * Properties expected:
 * show: boolean
 * body: string
 * buttons: Array<string>
 */
export default class ConfDialog extends PureComponent {
   close = (result) => {
      this.props.onClose(result)
   }

   addForm(state) {
      return (
         <div>
            <br />
            <FormGroup 
               controlId='newConversation'
               validationState={state.validator}
               >
               <FormControl 
                  value={state.value}
               />
            </FormGroup>
         </div>
      )
   }

   render() {
      console.log("ConfDialog rerenders");
      return (
         <Modal show={this.props.show} onHide={() => this.close("Dismissed")}>
            <Modal.Header closeButton>
               <Modal.Title>
                  {this.props.title}
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {this.props.body}
               {this.props.form ? this.addForm(this.props.form) : ''}
            </Modal.Body>
            <Modal.Footer>
               {this.props.buttons.map((btn, i) => <Button key={i}
                  onClick={() => this.props.onClose(btn)}>{btn}</Button>)}
            </Modal.Footer>
         </Modal>
      );
   }
}
