import {useState} from 'react';

//Login Screen
function LoginPage(){
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

//Website
function Web(){
  return(
    <div>
      <h1>Dies ist deine Startseite</h1>
    </div>
  );
}

//Anzeige
export default function App(){
  //Variablen
  const [site, setSite] = useState("Web")
  const [button, setButton] = useState("Login/Register")

  //Funktionen
  function changeSite(){
    site == "Web" ? setSite("Login") : setSite("Web")
  }

  //Output
  return(
    <div>
      <button onClick={changeSite}>{site == "Web" ? "Login/Register" : "Zurück"}</button>
      {site == "Login" ? <LoginPage /> : <Web />}
    </div>
  );
} 