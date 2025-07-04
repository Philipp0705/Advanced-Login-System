import { useState } from 'react';

export default function App() {
  //Variables
  const [site, setSite] = useState("Web")
  const [button, setButton] = useState("Login/Register")

  //Functions
  function LoginPage() { //Login Screen
    //Variablen
    const [panel, setPanel] = useState<any>(<Login />)

    //Funktionen
    function SystemChange() {
      function switchToLogin() {
        setPanel(<Login />)
      }
      function switchToRegister() {
        setPanel(<Register />)
      }
      return (
        <div>
          <button onClick={switchToLogin}>Login</button>
          <button onClick={switchToRegister}>Register</button>
        </div>
      );
    }

    function Login() {
      //Variablen
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      let used_email = "test"
      let used_password = "123"

      //Funktionen
      function testLogin() {
        if (email == used_email && password == used_password) {
          setSite("Admin")
        } else {
          console.log("Falsche Daten")
        }
      }

      //Output
      return (
        <div>
          <h1>Login</h1>
          <input type="text" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input type="text" placeholder="Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button onClick={testLogin}>Login</button>
          <br />
        </div>
      );
    }

    function Register() {
      return (
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
    return (
      <>
        {panel}
        <br /><br />
        <SystemChange />
      </>
    );
  }

  function Web() { //Main Website
    return (
      <div>
        <h1>Dies ist deine Startseite</h1>
      </div>
    );
  }

  function AdminPanel() { //Admin Panel
    return (
      <div>
        <h1>Das ist dein Adminpanel</h1>
      </div>
    );
  }

  function changeSite() { //Change from Web to Login and back
    site == "Web" ? setSite("Login") : setSite("Web")
  }

  //Output
  return ( //Main Frame
    <div>
      <button onClick={changeSite}>{site == "Web" ? "Login/Register" : "Zurück"}</button>
      {site == "Admin" ? <AdminPanel /> : site == "Login" ? <LoginPage /> : <Web />}
    </div>
  );
}