import { getAuth, sendEmailVerification } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../FirebaseConfig/firebseConfig';
import { AuthContext } from '../../UserContext/UserContext';


const auth = getAuth(app)

const Registration = () => {
  const [error, setError] = useState(null)
  const { createUSer, updateUserProfile, verifyEmail } = useContext(AuthContext)

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photoURL= form.photoURL.value
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password)

    if (password.length < 6) {
      setError('Password Should be 6 characters')
      return
    };
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setError('Set At last one special character')
      return;
    }
    setError('')

    createUSer(email, password)
      .then(result => {
        const user = result.user
        console.log(user);
        form.reset()
        handleEmailVerification()
        handleUpdateUserProfile(name, photoURL)

      })
      .catch(error => setError(error.message))
  }

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }

    updateUserProfile(profile)
      .then(() => { })
      .catch(error => console.error(error));
  }



  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {
        alert('a verification code was sent to your email')
      }).catch(error => setError(error.message))
  }




  return (
    <div>
      <div className='mt-5 border-5'>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h1 className='text-4xl font-bold text-blue-800 italic text-center'>Programming Web</h1>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign Up to your account
              </h2>

            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="name" className="sr-only ">
                    Email address
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="relative py-3 block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3  text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Your Full Name"
                  />
                  <label htmlFor="photo-url" className="sr-only ">
                    Email address
                  </label>
                  <input
                    id="photo-url"
                    name="photoURL"
                    type='text'
                    required
                    className="relative py-3 block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3  text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Your Photo Url"
                  />
                  <label htmlFor="email-address" className="sr-only ">
                    Email address
                  </label>
                  <input
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



              <div>
                <button
                  type="submit"
                  className="group mb-5 relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                  </span>
                  Sign up
                </button>

                <p className='text-inherit'>if you have already an account please !! <Link className='text-bold font-medium text-orange-700 ' to="/login">Login</Link></p>

                <p className='text-red-800 font-semibold font-2xl'>{error}</p>

                <div>




                </div>

              </div>
            </form>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Registration;