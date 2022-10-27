import { getAuth, GoogleAuthProvider, signInWithPopup ,FacebookAuthProvider, sendPasswordResetEmail} from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';





const auth=getAuth()

const Login = () => {
  const [error, setError ]  = useState(null)
  const { signIn ,googleLogin, facebookLogin,setUser} = useContext(AuthContext)
  const [userEmail,setUserEmail]=useState('')
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider=new FacebookAuthProvider();


  const navigate=useNavigate()
  let location=useLocation()
  let from = location.state?.from?.pathname || "/";


  
  const handleSgnIn = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset()

      })
      .catch(error => setError(error.message))
  }
  const handleGoogle=()=>{
   googleLogin(googleProvider)
   .then(result => {
    const user = result.user;
    console.log(user);
  })
  .catch(error => setError(error.message))
  }
  const handleFacebook=()=>{
    facebookLogin(facebookProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      setUser(user)
  
    })
    .catch(error => setError(error.message))
  }
  
  const handleEmail=e=>{
    const email=e.target.value;
    setUserEmail(email)
    console.log(email)
  }

  const forgetPassword=()=>{
    sendPasswordResetEmail(auth,userEmail)
    .then(()=>{
      alert('forget mail Sent to your email')
    }).catch(error=>setError(error.message))
  }



  return (
    <div className='mb-64 mt-24'>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className='text-4xl font-bold text-blue-800 italic text-center'>Programming Web</h1>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>

          </div>
          <form onSubmit={handleSgnIn} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only ">
                  Email address
                </label>
                <input 
                onBlur={handleEmail}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative py-3 block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3  text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative py-3 block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3  text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center">
              <div onClick={forgetPassword} className="text-sm">
                <div  className="font-medium text-indigo-600 hover:text-indigo-500">

                 Forgot your password?
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group mb-5 relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                Sign in
              </button>

              <p>if your account doesn't exist please!<Link className='text-bold font-medium text-orange-700 ' to="/registration">Registration</Link></p>

              <p className='text-red-800 font-bold text-center'>{error}</p>
            </div>
            <div className='flex justify-between'>
              <button  onClick={handleGoogle} className='btn btn-secondary'>Google</button>
              <button  onClick={handleFacebook} className='btn btn-info'>Facebook</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;