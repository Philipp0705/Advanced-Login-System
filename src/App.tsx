import { useState } from 'react';

export default function App() {
  //Variables
  const [site, setSite] = useState("Web")
  const [button, setButton] = useState("Login/Register")

  //Functions
  function LoginPage() { //Login Screen
    //Variablen
    const [panel, setPanel] = useState<any>(<Login />)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [used_email, setUsed_email] = useState('')
    const [used_password, setUsed_password] = useState('')
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
      //Variables
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      //Funktionen
      function testLogin() {
        if (email == used_email && password == used_password && email != "" && password != "") {
          setSite("Admin")
        } else {
          alert("Die eingegebenen Daten gehören keinem Account an!")
        }
      }

      //Output Login
      return (
        <div>
          <h1>Login</h1>
          <input type="text" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input type="text" placeholder="Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button onClick={testLogin}>Login</button>
          <br /><br />
        </div>
      );
    }

    function Register() {
      //Variables
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [repeat_password, setRepeat_Password] = useState('')

      //Functions
      function test_register() {
        if (password.includes(" ") || email.includes(" ")) {
          alert("No Spaces are allowed!")
        } else if (password != repeat_password) {
          alert("Passwords are not matching!")
        } else if (password != '' && email != '') {
          setUsed_password(password)
          setUsed_email(email)
          alert("Successfully created new account!")
          console.log({ used_password })
        } else alert("Please fill out every box!")
      }

      //Output Register
      return (
        <div>
          <h1>Register</h1>
          <input type="text" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input type="text" placeholder="Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <input type="text" placeholder="Passwort wiederholen" value={repeat_password} onChange={(e) => setRepeat_Password(e.target.value)} />
          <br />
          <button onClick={test_register}>Register</button>
        </div>
      );
    }

    //Look of Login Page
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
      <button onClick={changeSite}>{site == "Web" ? "Login/Register" : site == "Admin" ? "Logout" : "Zurück"}</button>
      {site == "Admin" ? <AdminPanel /> : site == "Login" ? <LoginPage /> : <Web />}
    </div>
  );
}