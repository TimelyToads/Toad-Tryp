import React from 'react'
import { Segment, Button } from 'semantic-ui-react'

const SubmitCancelButtons = (props) => (
  <div>
    <Segment textAlign="right">
    <Button  color="grey" onClick={props.cancelClickHandler}>Cancel</Button>
      <Button  color="green" onClick={props.submitClickHandler}> Submit</Button>
    </Segment>
  </div>
)

export default SubmitCancelButtons;

