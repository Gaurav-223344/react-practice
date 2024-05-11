import React, { MouseEventHandler } from "react";
import "./Button.css";

export type StyleProps = {
    size?: "sm" | "md" | "lg" | "xl",
}

export type ActionProps = {
    type?: "button" | "submit" | "reset",
    onclick?: MouseEventHandler
}

export type ButtonProps = {
    id?: string,
    classes?: string[],
    style?: StyleProps,
    action?: ActionProps
}

const Button = (props: ButtonProps) => {
    const { id="1", classes=[], style = undefined, action = undefined } = props
    
    const size = style && style.size ? style.size : "sm"
    const type = action && action.type ? action.type : "button"

    const classList = [`${size}-button`,...classes]

    console.log(size)
    console.log(type)

    return (
        <button
            id={id}
            type={type}
            className={classList.join(" ")}
        >Click Me</button>
    )
}

export default Button