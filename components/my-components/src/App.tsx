import React, {MouseEventHandler} from 'react';
import Button , {ActionProps, StyleProps } from './components/button-component/Button';
// import Button, { StyleProps, ActionProps } from './components/practice-button-component/Button';


function App() {
  // const onclickButtonHandler:MouseEventHandler = (e)=>{
  //   console.log("Button Clicked")
  // }


  const action:ActionProps = {
    // onclick : onclickButtonHandler
    type : "button"
  }

  const style: StyleProps = {
    size: "lg"
  }

  return (
    <>
      <Button id={"button-1"} classes={["bold_text_button"]} style={style} action={action} />
    </>
  )
}

export default App
