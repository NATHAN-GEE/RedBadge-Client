import React from 'react'
import { Typography, Dialog, DialogActions, Button, FormGroup, TextField } from '@material-ui/core'

import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
function ContactComponent() {
  const [state, handleSubmit] = useForm("mbjqkvwl");
  const [toggle, setToggle] = useState(false)

  const toggleModalOpen = () => {
        setToggle(true)
      }
  const toggleModalClose = () => {
      setToggle(false)
    }
 
  return (
    <div>
    <Button onClick={toggleModalOpen}>Contact Me</Button>
            <Dialog open={toggle}
                style={{ textAlign: 'center', justifyContent:'center'}}
                maxWidth='xs'
                onClose={toggleModalClose}
                fullWidth={true}>
        <form onSubmit={handleSubmit}>
          <h3>Please contact me for further inquiries.</h3>
          <hr/>
          <FormGroup>
          <TextField
            label='Email'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />      
          </FormGroup>
          <FormGroup>

          <TextField
            multiline
            maxRows={6}
            label='Reason for contact'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </FormGroup>
      <DialogActions>
      <Button type='submit' onClick={()=>setToggle(false)}>Submit</Button>

                </DialogActions>
    </form>
      </Dialog>
      </div>
  );
}

export default ContactComponent;