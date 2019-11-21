import React, { useEffect, useState } from 'react';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
// import { Form, FormGroup, Input } from 'reactstrap';
import Api from '../Api/UserAPI.js'

const MessagesPage = () => {
  const [messageinfo, setMessageInfo] = useState(0);

  const messages = async () => {
    const message = await Api.fetchMessage()
    if (messageinfo === 0) {
      setMessageInfo(message)
    }
  }
  useEffect(() => {
    messages()
  })
  if (messageinfo) {
    console.log(messageinfo[0].message)
  }
  return (
    <div>
      <p>Message {messageinfo && messageinfo[0].message}</p>
    </div>
  );
}

export default MessagesPage;
