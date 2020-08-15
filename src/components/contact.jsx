import React from "react";

export function Contact() {
  return (
    <div className="contact-bar">
      <form action="" className="contact-form">
        <label>Name</label>
        <input required type="text" placeholder="John Doe"></input>

        <label>E-mail</label>
        <input required type="email" placeholder="John.Doe@gmail.com"></input>

        <label>Your question</label>
        <textarea
          required
          rows="4"
          placeholder="Dear Sir or Madam. I would like to aks you.... "
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
