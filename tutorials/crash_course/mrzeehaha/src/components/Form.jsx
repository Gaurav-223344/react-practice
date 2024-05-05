import React, { useState } from "react";

function Form() {
  const formContent = {
    name: "",
    email: "",
    password: "",
  };
  const [form, setForm] = useState(formContent);

  const onChangeHandlerForName = (e) => {
    setForm({...form, name:e.target.value})
  }

  const onChangeHandlerForEmail = (e) => {
    setForm({...form, email:e.target.value})
  }

  const onChangeHandlerForPassword = (e) => {
    setForm({...form, password:e.target.value})
  }

  const onSubmitHandlerForFormTest = (e) => {
    e.preventDefault()
    alert(JSON.stringify(form, undefined, 2))
  }

  return (
    <>
      <form id="test" onSubmit={onSubmitHandlerForFormTest}>
        <input type="text" placeholder="Name" value={form.name} onChange={onChangeHandlerForName}/>
        <br />
        <input type="text" placeholder="Email" value={form.email} onChange={onChangeHandlerForEmail}/>
        <br />
        <input type="text" placeholder="Password" value={form.password} onChange={onChangeHandlerForPassword}/>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <br />
      <p>
        <b>Name</b> : {form.name} <br />
        <b>Email</b> : {form.email} <br />
        <b>Password</b> : {form.password} <br />
      </p>
    </>
  );
}

export default Form;
