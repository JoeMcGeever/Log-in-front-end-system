import { Form, Icon, Input, Button, Alert } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom'
import 'tachyons';

export class LoginPage extends React.Component {

  state = {
    loginSucessfully: false, //if the user is added successfully
    showSuccess: false, //if should we show a successful feedback message after adding a user
    showError: false, //if should we show an error feedback message after adding a user
    errorCode: 400, //to save the errorCode we recieved from the api server
    responseStatus: "nothing", //the validation status of the email
    errorMessage: "" //the error message to display to the user after server rejects action
  };

  checkResponse = (data) => {
    if(this.state.loginSucessfully){
      this.props.form.resetFields();
      this.setState({
      showSuccess:true,
      showError : false
      //NEED TO ROUTE AWAY IF SUCCESSFUL LOGIN TO MAIN
      });
    }else{
      //handle errors
      this.setState({
        
      errorMessage: data.message,
      showSuccess:false,
      showError : true,
      responseStatus: "error"
      });
    } 
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
    if (!err) {
      //echo the values to the browser console to make sure they are correct
      console.log('Received values of form: ', values.username, ' ', values.password);
      //here we should send a request to our server to post the user

      //use fetch API to post the user data 
      //NOTE IT IS ASYNC -> .then runs after fetch has finished
      //chaining promises --> .then gets the resolved promise
      //so the fetch gets the data, the then then manipulates accordingly

      fetch('http://localhost:5000/api/v1.0/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({values})
      }).then(res => {
        if(res.ok){
          this.setState({loginSucessfully:true})
          console.log("Correct")
        } else{
          this.setState({
          addedSucessfully:false,
          errorCode: res.status
        })
      };

        return res.json()
      }).then(data => this.checkResponse(data))
    }
  });
  };

render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <Form onSubmit={this.handleSubmit}>

        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Username cannot be empty.' }],
          })(<Input
              prefix={<Icon type="user"/>} placeholder="Username"
            />,
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Password cannot be empty' }],
          })(
            <Input
              prefix={<Icon type="lock"/>}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>

        <Form.Item>
        <Button type="primary" htmlType="submit" className="loginSubmit">
            Log in
        </Button>
        </Form.Item>



        </Form>
          <a className="loginForgotPassword" href="">
            Forgotten password?
          </a>
          <br></br>

          {/* This button should submit to the API; the entered username and password
          As of now; it will just link to the accountInfo page */}

          <br></br>



      {/*THIS HERE NEEDS TO SEND AN API REQUEST GET/POST/FETCH WHATEVER REQUEST TO THE URL I HAVE NO CLUE  */}


          <div>
          <Link to="/register">Register Now!</Link>
          </div>

      {this.state.showSuccess ? <Alert message="Correct sign in" type="success" /> :null}
      {this.state.showError ? <Alert message={this.state.errorMessage} type="error" /> :null}

      


      </article>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(LoginPage);

export default Login;

//THE REGISTER BUTTON SHOULD TELL THE APP TO CHANGE STATE FROM:
// ./login    to  ./register