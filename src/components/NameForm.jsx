import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NameForm = () => {
  const context = useContext(AppContext)
  const [name, setName] = useState(context.username);

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    context.setUsername(name)
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Control
          value={name}
          onChange={handleChange}
          type="text" 
          placeholder="Enter your Name" 
        />
      </Form.Group>
      <Button 
        variant={context.theme} 
        onClick={handleClick} 
        type="submit"
      >
        Change Name
      </Button>
    </Form>
  )
}

export default NameForm;