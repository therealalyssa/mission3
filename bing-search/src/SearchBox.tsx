import React from 'react'
import { useState } from 'react';
import type {FormEvent} from 'react'

function SearchBox() {
  const [userStr, setUserStr] = useState('');
  const sendForm = (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const {name} = event.target as typeof event.target & {
      name: {value: string}
    };
    const str = name.value;
    const replaced = str.replace(/[^a-z0-9]/gi, ' ');
    setUserStr(replaced);
    //console.log(replaced);
  }


  return (
    <div>
      <form  className="form-control" onSubmit={ evt => {sendForm(evt)}}>
        <label>
          <input type="text" id="name"></input>
        </label>
        <button type='submit'>Submit</button>
      </form>
      <h2>{userStr}</h2>
    </div>
  )
}

export default SearchBox