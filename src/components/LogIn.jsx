import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/logo-jardin.png'
import './login.css'

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  const signIn = e => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then( () => {
      navigate('/')
    })
    .catch( error => alert(error.message))
  };

  const register = e => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      if(user) {
        navigate('/')
      }
    })
    .catch(error => alert(error.message))
  };

  return (
    <div className='login'>
      <Link to='/'>
          <img className='login-logo' src={Logo}/>
      </Link>

      <div className='login-container'>
        <h1>Sign-in</h1>

        <form>
           <h5>E-Mail</h5>
           <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

           <h5>Password</h5>
           <input type='password'  value={password} onChange={e => setPassword(e.target.value)}/>

           <button className='login-signIn_button' onClick={signIn}>Sign In</button>
        </form>
        
        <p>
          By signing-in you agree to the Jardín Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button className='login-register_button' onClick={register}>Create your Jardín Account</button>
      </div>
    </div>
  )
};

export default LogIn;
