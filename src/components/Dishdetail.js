import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
   CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, DropdownToggle,FormGroup,Label,Input,Dropdown, DropdownMenu,DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
   class RenderDish extends Component{
      constructor(props){
         super(props);
         this.state = {
            isModalOpen: false,
            isDDOpen: false
         };
         this.toggleModal = this.toggleModal.bind(this);
         this.toggleDD = this.toggleDD.bind(this);
      }
      toggleModal(){
         const val = !this.state.isModalOpen;
         this.setState({ isModalOpen: val }); 

      }
      toggleDD(){
         this.setState({isDDOpen:!this.state.isDDOpen}); 
      }
      render(){
         if(this.props.dish!=null){
            const comments = this.props.comments.map((comment) => {
               return (
                  <div>
                     {comment.comment}
                     <br/><br/>
                     -- {comment.author} , {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))};
                     <br/><br/>
                  </div>
               );
            });
            return(
               <>
               <div className="col-md-5">
               <Card>
                  <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                  <CardBody>
                     <CardTitle>{this.props.dish.name}</CardTitle>
                     <CardText>{this.props.dish.description}</CardText>
                  </CardBody>
               </Card>
               </div>
               <div className="col-md-5">
                  <h1>Comments</h1>
                  <br/>
                  {comments}
                  <br/>
                  
                  <Button type="button" outlines onClick={this.toggleModal}>
                           <span className="fa fa-pencil"></span> Submit Comment
                  </Button>
                  <br/> <br/>
                  <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
               <ModalHeader toggle={this.toggleModal}> Submit Comment </ModalHeader>
               <ModalBody>
                           <Form onSubmit={this.handleLogin}>
                              <FormGroup>
                                 <Dropdown isOpen={this.state.isDDOpen} toggle={this.toggleDD}>
                                    <DropdownToggle caret>
                                       1
                                    </DropdownToggle>
                                    <DropdownMenu>
                                       <DropdownItem>1</DropdownItem>
                                       <DropdownItem>2</DropdownItem>
                                       <DropdownItem>3</DropdownItem>
                                       <DropdownItem>4</DropdownItem>
                                       <DropdownItem>5</DropdownItem>
                                    </DropdownMenu>
                                 </Dropdown>
                              </FormGroup>
                              <FormGroup>
                                 <Label htmlFor="password">Password</Label>
                                 <Input type="password" id="password" name="password"
                                       innerRef={(input) => this.password = input}  />
                              </FormGroup>
                              <FormGroup check>
                                 <Label check>
                                       <Input type="checkbox" name="remember"
                                       innerRef={(input) => this.remember = input}  />
                                       Remember me
                                 </Label>
                              </FormGroup>
                              <Button type="submit" value="submit" color="primary">Login</Button>
                           </Form>
               </ModalBody>
            </Modal>
               </div>
               </>
            );
         }
         else{
            return(
               <div></div>
            );
         }
      }
   }
   class Dishdetail extends Component{
      constructor(props){
         super(props);
      }
      render(){
         return (
               <div className="container">
                  <div className="row">
               <Breadcrumb>
                  <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>

                  <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
               </Breadcrumb>
               <div className="col-12">
                  <h3>{this.props.dish.name}</h3>
                  <hr />
               </div>
            </div>
               <div className="row">
                  <RenderDish dish={this.props.dish} comments={this.props.comments}/>
               </div>
            </div>
         );
   }
}

export default Dishdetail;
