import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react'

class RegisterPage extends React.Component {
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
      <main class="pa4 black-80">
      <form class="measure center">
      <p>hi</p>
      </form>
      </main>
    );
  }
}

const Register = Form.create({ name: 'normal_register' })(RegisterPage);

export default Register;