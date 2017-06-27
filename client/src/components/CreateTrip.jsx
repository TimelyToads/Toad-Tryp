import React from 'react'
import { Form, Input } from 'semantic-ui-react'
import InputField from './UI/InputField.jsx'

const CreateTrip = () => (
  <div>
    <InputField placeholder="What is your first name..." label="First Name"  id="firstName"/>
    <Form> 
      <Form.Group >
      <Form.Input size="huge" label='First name' placeholder='Last Name'  />
      </Form.Group>
      <Form.Group grouped>
        <label>HTML radios</label>
        <Form.Field label='This one' control='input' type='radio' name='htmlRadios' />
        <Form.Field label='That one' control='input' type='radio' name='htmlRadios' />
      </Form.Group>
      <Form.Group grouped>
        <label>HTML checkboxes</label>
        <Form.Field label='This one' control='input' type='checkbox' />
        <Form.Field label='That one' control='input' type='checkbox' />
      </Form.Group>
      <Form.Field label='An HTML <textarea>' control='textarea' rows='3' />
      <Form.Field label='An HTML <button>' control='button'>
        HTML Button
      </Form.Field>
      </Form>
    </div>
)

export default CreateTrip;