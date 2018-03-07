import React, { Component } from 'react';
import { Register, SignIn, ConfDialog, ConversationOverview } from '../index'
import { Route, Switch } from 'react-router-dom';
import { Col, Navbar, Nav, NavItem, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Main.css';

class Main extends Component {
   signedIn() {
      return Object.keys(this.props.Prss).length !== 0; // Nonempty Prss obj
   }

   render() {
      console.log("Redrawing main " + JSON.stringify(this.props));
      return (
         <div>
            <div>
               <Navbar>
                  <Navbar.Toggle />
                  {this.signedIn() ?
                     <Navbar.Text key={1}>
                        {`Logged in as: ${this.props.Prss.firstName}
                         ${this.props.Prss.lastName}`}
                     </Navbar.Text>
                     :
                     ''
                  }
                  <Navbar.Collapse>
                     <Nav>
                        {this.signedIn() ?
                           [
                              <LinkContainer key={0} to="/cnvs">
                                 <NavItem>All Conversations</NavItem>
                              </LinkContainer>,
                              <LinkContainer key={1} to="/msgs">
                                 <NavItem>My Conversations</NavItem>
                              </LinkContainer>
                           ]
                           :
                           [
                              <LinkContainer key={0} to="/signin">
                                 <NavItem>Sign In</NavItem>
                              </LinkContainer>,
                              <LinkContainer key={1} to="/register">
                                 <NavItem>
                                    Register
                               </NavItem>
                              </LinkContainer>,
                           ]
                        }
                     </Nav>
                     {this.signedIn() ?
                        <Nav pullRight>
                           <LinkContainer key={2} to="/">
                              <NavItem eventKey={1}
                                 onClick={() => this.props.signOut()}>Sign out</NavItem>
                           </LinkContainer>
                        </Nav>
                        :
                        ''
                     }
                  </Navbar.Collapse>
               </Navbar>
            </div>

            {/*Alternate pages beneath navbar, based on current route*/}
            <Switch>
               <Route exact path='/' render={() => <Home />} />
               <Route path='/signin' render={() => <SignIn {...this.props} />} />
               <Route path='/register'
                  render={() => <Register {...this.props} />} />
               <Route path='/cnvs' render={() => <ConversationOverview
                  {...this.props} />} />
            </Switch>

            {/*Error popup dialog*/}
            <ConfDialog
               show={this.props.Errs.length > 0}
               title="Error Notice"
               body={<ListGroup>
                  {this.props.Errs.map(
                     (err, i) => <ListGroupItem key={i} bsStyle="danger">
                        {err}
                     </ListGroupItem>
                  )}
               </ListGroup>}
               buttons={['OK']}
               onClose={() => { this.props.clearErrors() }}
            />
         </div>
      )
   }
}

// Home page component
class Home extends Component {
   render() {
      return (
         <div className="container">
            <Col sm={10}>
               <h1>
                  Home
               </h1>
            </Col>
         </div>
      )
   }
}

export default Main
