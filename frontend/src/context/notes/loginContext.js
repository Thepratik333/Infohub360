import React, { useState, createContext } from 'react';

const LoginContext = createContext();

const LoginProvider = (props) => {
  const [alert, setAlert] = useState(null);
  const [city, setCity] = useState("")
  const [date, setDate] = useState({
    from:"",
    to:""
  })

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <LoginContext.Provider value={{ showAlert, alert, date, setDate, city, setCity }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, LoginContext };