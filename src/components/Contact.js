import React from "react";

function Contact() {
  return (
    <div>
      <h1 className="font-lg">Contact</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
