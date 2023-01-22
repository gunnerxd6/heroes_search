import React from 'react'
import { useState } from 'react'

export const Searchinput = ({onSearchHero}) => {

  const [inputValue, setInputValue] = useState("")
  const onChangeInput = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (e) =>  {
    e.preventDefault();
    onSearchHero(inputValue.trim());
    //setInputValue("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input className='form-control' type="text" value={inputValue} onChange={onChangeInput} placeholder="Ex: Daredevil"/>
    </form>
  )
}
