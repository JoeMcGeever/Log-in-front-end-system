import { Form, Icon, Input, Button } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom'
import 'tachyons';

class LoginPage extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Username cannot be empty.' }],
          })(
            <Input
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
          <a className="loginForgotPassword" href="">
            Forgotten password?
          </a>
          <br></br>
          <Button type="primary" htmlType="submit" className="loginSubmit">
            Log in
          </Button>
          <br></br>
          <div>
          <Link to="/register">Register Now!</Link>
          </div>
        </Form.Item>
      </Form>
     
      </article>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(LoginPage);

export default Login;

//THE REGISTER BUTTON SHOULD TELL THE APP TO CHANGE STATE FROM:
// ./login    to  ./register