import React, {MouseEventHandler} from 'react';
import Button, { StyleProps, ActionProps } from './components/button-components/Button';



function App() {
  const onclickButtonHandler:MouseEventHandler = (e)=>{
    console.log("Button Clicked")
  }


  const action:ActionProps = {
    onclick : onclickButtonHandler
  }

  const style: StyleProps = {
    buttonSize: "lg",
    boldText: true,
    borderRadius : "10px"
  }

  return (
    <>
      <Button style={style} action={action} />
    </>
  )
}

export default App
