import React from "react";

function mergeWithExpiry({ localStorageKey, key, value, ttl }) {
  const now = new Date();

  const item = {
    [key]: value,
    expire: now.getTime() + ttl,
  };

  const getPreviousData = getWithExpiry(localStorageKey);
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({ ...getPreviousData, ...item })
  );
}

function getWithExpiry(localStorageKey) {
  const itemStr = localStorage.getItem(localStorageKey);

  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);

  const now = new Date();
  if (now.getTime() > item.expire) {
    localStorage.removeItem(localStorageKey);
    return null;
  }
  return item;
}

export function Contact() {
  const savedFormData = getWithExpiry("formData");
  const [formData, setFormData] = React.useState(savedFormData || {});

  const setData = function ({ key, value }) {
    setFormData(value);
    mergeWithExpiry({
      localStorageKey: "formData",
      key,
      value,
      // 24 hours
      ttl: 3600 * 1000 * 24,
    });
  };

  return (
    <div className="contact-bar">
      <h1>Welcome to our contact form</h1>
      <form action="" className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          id="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={(event) => {
            setData({ key: "name", value: event.target.value });
          }}
        />

        <label htmlFor="email">E-mail</label>
        <input
          required
          type="email"
          id="email"
          placeholder="John.Doe@gmail.com"
          value={formData.email}
          onChange={(event) => {
            setData({ key: "email", value: event.target.value });
          }}
        />

        <label htmlFor="question">Your question</label>
        <textarea
          required
          rows="4"
          id="question"
          placeholder="Dear Sir or Madam. I would like to aks you.... "
          value={formData.question}
          onChange={(event) => {
            setData({ key: "question", value: event.target.value });
          }}
        ></textarea>

        <button className="contact-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
