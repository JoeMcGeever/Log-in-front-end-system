//OK:
//You need to display:
//Username, first name, last name, [profile image], email
//about, date registered
//country ID (therefore country) -> discuss how to do this.
//okk, it has been sent from back end to front
//NOW:
//for country ID, we can do what happens in week 8 lab 15
//changes state from a switch case kinda
//see the last page, the hyperlink and then the
//light / dark theme part

import React from 'react';
import {Form, Input, Button, Icon} from 'antd';

export class HomeGrid extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isLoaded: false, //if the user is added successfully
            editMode: false, //Only display as editable boxes when edit mode is enabled
            showError: false, //if should we show an error feedback message after adding a user
            errorCode: 400, //to save the errorCode we recieved from the api server
            errorMessage: "", //the error message to display to the user after server rejects action
            userDetails: {}
          };
    
        this.clickItem = this.clickItem.bind(this);
    }

    
    componentDidMount(){
        console.log('mounted component')
        fetch('http://localhost:5000/api/v1.0/home/getAccountInfo', {
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.token
            },
        })
        .then(res => res.json())
        .then(
            (result) => {
                //console.log(result[0])
            this.setState({
                isLoaded: true,
                // userDetails: result[0]
                userDetails: result[0]
            });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log("ERROR HERE")
                console.log("CHANGE STATE OF ITEMS TO DISPLAY THE ERROR HERE")
            this.setState({
                isLoaded: true,
                error : error
            });
            }
        )
    }

    enterEditMode = e => {
        e.preventDefault();
        this.setState(prevState => ({
            editMode: !prevState.editMode
          }));
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e)
      };

    clickItem(id){
        console.log("article with id:" + id + " was clicked");
    }
    render() {
    let details = this.state.userDetails
    //  const about = details.about
    // console.log(details.about)
    // console.log(about)
      return <> 
      <Form onSubmit={this.handleSubmit}>
      <h4>
            Username:
      </h4>
      <Form.Item >
           {this.state.editMode ? <Input value={details.username} ></Input> :null}
           {!this.state.editMode ? <p> {details.username} </p> :null}
      </Form.Item>
      <h4>
            First Name:
      </h4>
      <Form.Item >
           {this.state.editMode ? <Input value={details.firstName} ></Input> :null}
           {!this.state.editMode ? <p> {details.firstName} </p> :null}
      </Form.Item>
      <h4>
            Last Name:
      </h4>
      <Form.Item >
           {this.state.editMode ? <Input value={details.lastName} ></Input> :null}
           {!this.state.editMode ? <p> {details.lastName} </p> :null}
      </Form.Item>
      <h4>
            Email:
      </h4>
      <Form.Item >
           {this.state.editMode ? <Input value={details.email} ></Input> :null}
           {!this.state.editMode ? <p> {details.email} </p> :null}
      </Form.Item>
      <h4>
            About:
      </h4>
      <Form.Item >
           {this.state.editMode ? <Input value={details.about} ></Input> :null}
           {!this.state.editMode ? <p> {details.about} </p> :null}
      </Form.Item>
      <h4>
            Country (ID):
      </h4>
      <Form.Item >
           {this.state.editMode ? <Input value={details.countryID} ></Input> :null}
           {!this.state.editMode ? <p> {details.countryID} </p> :null}
      </Form.Item>
      <h4>
            Profile Image URL:
      </h4>
      <Form.Item >
           {this.state.editMode ? <Input value={details.profileImageURL} ></Input> :null}
           {!this.state.editMode ? <p> {details.profileImageURL} </p> :null}
      </Form.Item>
      <h4>
            Date Registered: {details.dateRegistered}
      </h4>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="changeSubmit">
            Confirm changes
        </Button>
      </Form.Item>
      </Form>
        {this.state.editMode ?
        <Button type="primary" htmlType="submit" className="enterEdit" onClick={this.enterEditMode}>
            Cancel
        </Button>
        :null}
        {!this.state.editMode ?
        <Button type="primary" htmlType="submit" className="enterEdit" onClick={this.enterEditMode}>
            Edit data
        </Button>
        :null}
      </>
    }
  }
const index = Form.create({ name: 'normal_home' })(HomeGrid);

export default index;



