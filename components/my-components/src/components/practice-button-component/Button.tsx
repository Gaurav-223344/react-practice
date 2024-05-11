import React, { MouseEventHandler } from "react";
import "./Button.css";

export type StyleProps = {
  buttonSize ?: "sm" | "md" | "lg" | "xl",
  backgroundColor?: string,
  borderColor?: string,
  borderRadius?: string,
  borderSize?: string,
  color?: string,
  fontSize?: string,
  fontFamily ?: string
  padding ?: string,
  boldText ?: boolean
}

export type ActionProps = {
  onclick ?: MouseEventHandler,
  onmouseenter ?: MouseEventHandler,
  onmouseleave ?: MouseEventHandler
}

type ButtonProps = {
  style ?: StyleProps,
  action ?: ActionProps
};

function Button(props: ButtonProps) {
  const backgroundColor = props.style && props.style.backgroundColor ? props.style.backgroundColor: "white"
  const borderSize = props.style && props.style.borderSize ? props.style.borderSize : "1px"
  const borderColor = props.style && props.style.borderColor ? props.style.borderColor : "black"
  const borderRadius = props.style && props.style.borderRadius ? props.style.borderRadius : "5px"
  const color = props.style && props.style.color ? props.style.color : "black"
  const buttonSize = props.style && props.style.buttonSize ? props.style.buttonSize : "md"
  const fontSize = props.style && props.style.fontSize ? props.style.fontSize : "14px"
  const padding = props.style && props.style.padding ? props.style.padding : "0px"
  const fontFamily = props.style && props.style.fontFamily ? props.style.fontFamily : "auto"
  const boldText = props.style && props.style.boldText ? props.style.boldText : false

  const blankFunction:MouseEventHandler = () => {}
  const onclick:MouseEventHandler =  props.action && props.action.onclick ? props.action.onclick : blankFunction
  const onMouseEnter:MouseEventHandler = props.action && props.action.onclick ? props.action.onclick : blankFunction
  const onMouseLeave:MouseEventHandler = props.action && props.action.onclick ? props.action.onclick : blankFunction
  
  const classes:string[] = []
  classes.push(`${buttonSize}-button`)

  if(boldText){
    classes.push("bold_text_button")
  } 

  console.log(classes)
  
  return (
    <>
      <button className={classes.join(" ")} 
              style= {
                {
                  backgroundColor,  
                  border: `${borderSize} solid ${borderColor}`, 
                  color,
                  borderRadius,
                  fontSize,
                  padding,
                  fontFamily
                }
              }
              
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={onclick}
              type="button">
        Click Me
      </button>
    </>
  );
}

export default Button