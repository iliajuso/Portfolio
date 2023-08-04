import React from 'react'
import clsx from "clsx";
import s from './Button.module.sass'

export const Button = (props) => {
    const {
        className,
        textBtn,
        primary,
        ghost,
      } = props;
    
    
    const innerClassName = clsx(s.button, className, { 
        [s.button__primary]: primary,
        [s.button__ghost]: ghost,
    });

  return (
        <button className={innerClassName}>{textBtn}</button>
  )
}
