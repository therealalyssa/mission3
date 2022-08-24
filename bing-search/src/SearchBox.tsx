import React from 'react'
import { useState } from 'react';
import type {FormEvent} from 'react';
import StringFormat from "./StringFormat";

function SearchBox() {
  const [userStr, setUserStr] = useState('');
  const sendForm = (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const {name} = event.target as typeof event.target & {
      name: {value: string}
    };
    setUserStr(StringFormat(name.value));
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