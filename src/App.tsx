import {useState} from 'react';

//Login Screen

export default function App(){
  //Variablen
  const [panel, setPanel] = useState<any>(<Login />)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  //Funktionen
  function SystemChange(){
  function switchToLogin(){
    setPanel(<Login />)
  }
  function switchToRegister(){
    setPanel(<Register />)
  }
  return(
    <div>
      <button onClick={switchToLogin}>Login</button>
      <button onClick={switchToRegister}>Register</button>
    </div>
  );
}

  function Login(){
    return(
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="E-Mail" />
        <br />
        <input type="text" placeholder="Passwort" />
        <br /><br />
      </div>
    );
  }

  function Register(){
    return(
      <div>
        <h1>Register</h1>
        <input type="text" placeholder="E-Mail" />
        <br />
        <input type="text" placeholder="Passwort" />
        <br />
        <input type="text" placeholder="Passwort wiederholen" />
      </div>
    );
  }

  //Output
  return(
    <>
    {panel}
    <br /><br />
    <SystemChange />
    </>
  );
}
