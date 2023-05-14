import React from 'react';
import Button from './Button';

const listButton = [
  "All","Gaming","Songs","Live","Soccer","Cricket","Cooking","News"
]

const ButtonList = () => {
  return (

    <div className="flex"> 
    {
      listButton.map((button,index) => 
        <Button name={button} key = {index}/>
        )
    }
      {/* <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Soccer"/>
      <Button name="Cricket"/>
      <Button name="Cooking"/>
      <Button name="News"/> */}

      </div>
  )
}

export default ButtonList