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
import {Col, Row, Form, Input} from 'antd';

export class HomeGrid extends React.Component {

    constructor(props){
        super(props);
        //console.log("HAHAHAHAA")
       // console.log(props)
        // this.state = {
        //     items : []
        // }
        this.state = {
            isLoaded: false, //if the user is added successfully
            showSuccess: false, //if should we show a successful feedback message after adding a user
            showError: false, //if should we show an error feedback message after adding a user
            errorCode: 400, //to save the errorCode we recieved from the api server
            errorMessage: "", //the error message to display to the user after server rejects action
            userDetails: {}
          };
    
        this.clickItem = this.clickItem.bind(this);
    }

    // state = {
    //     isLoaded: false, //if the user is added successfully
    //     showSuccess: false, //if should we show a successful feedback message after adding a user
    //     showError: false, //if should we show an error feedback message after adding a user
    //     errorCode: 400, //to save the errorCode we recieved from the api server
    //     errorMessage: "", //the error message to display to the user after server rejects action
    //     userDetails: {about: 'nothing'}
    //   };

    
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
                console.log(result[0])
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

    clickItem(id){
        console.log("article with id:" + id + " was clicked");
    }
    render() {

    let details = this.state.userDetails
    //  const about = details.about
     console.log(details.about)
    // console.log(about)
      return <> 
      <Form.Item >
          <Input value={details.about} ></Input>
      </Form.Item>
      <Form.Item >
          <Input value={details.countryID} ></Input>
      </Form.Item>
      <Form.Item >
          <Input value={details.username} ></Input>
      </Form.Item>
      <Form.Item >
          <Input value={details} ></Input>
      </Form.Item>
      <Form.Item >
          <Input value={details} ></Input>
      </Form.Item>
      <Form.Item >
          <Input value={details} ></Input>
      </Form.Item>
      <Form.Item >
          <Input value={details} ></Input>
      </Form.Item>
      <Form.Item >
          <Input value={details} ></Input>
      </Form.Item>
      </>
    }
  }
  
  export default HomeGrid;



