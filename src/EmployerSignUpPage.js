import React, { Component } from 'react'
import { Button, Checkbox, Form, Divider, Transition } from 'semantic-ui-react'

export default class EmployerSignUpPage extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Button content={visible ? 'Hide' : "Don't have an account? Click here to sign up!"} onClick={this.toggleVisibility} />
        <Divider />
        <Transition visible={visible} animation='scale' duration={500}>


          <Form widths={20}>
          <div className="text-left">
    <Form.Field inline>
      <label>Name</label>
      <input placeholder='Name' />
    </Form.Field>
    <Form.Field inline>
      <label>Email</label>
      <input placeholder='Email' />
    </Form.Field>
    <Form.Field inline>
      <label>Mobile No</label>
      <input placeholder='Mobile No' />
    </Form.Field>
    <Form.Field inline>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
    <Form.Field inline>
      <label>Confirm Password</label>
      <input placeholder='Confirm Password' />
    </Form.Field>
    <Divider />
    <p>Would you like to be verified on our website? We will need some extra details to do so.</p>
    <Form.Field inline>
      <label>Company Name</label>
      <input placeholder='Company Name' />
    </Form.Field>
    <Form.Field inline>
      <label>UEN/Registered No</label>
      <input placeholder='UEN/Registered No' />

    </Form.Field>
    </div>


        <Divider />

    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Sign Up</Button>
  </Form>
 
        </Transition>
      </div>
    )
  }
}
