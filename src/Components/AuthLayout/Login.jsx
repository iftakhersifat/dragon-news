import React, { use } from 'react';
import { Link,useNavigate } from 'react-router';
import { AuthContext } from '../Firebase/AuthProvider';

const Login = () => {
    const {signIn} = use(AuthContext);

    // loadPage
    const navigate =useNavigate();

    const handelLogin=(e)=>{
        e.preventDefault();
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(email, password);

        // sign in
        signIn(email, password)
        .then(()=>{
            alert("Successfully Login");
        })
        .catch(error=>{
            console.log(error);
        })
    }

    // loadPage
    const loadPage=()=>{
        navigate("/")
    }

    return (
        <div className="hero mt-10">

    <div className="shadow-2xl ">
      <div className="card-body border-2 border-amber-300 w-[700px] h-[500px]">
        
        <form onSubmit={handelLogin} className="fieldset p-6 space-y-4">
        <h1 className='font-bold text-2xl text-center mb-4'>Login your account</h1>
        <div className='border mb-4 text-[#E7E7E7]'></div>

          <label className="label font-bold">Email address</label>
          <input type="email" className="input w-full" name='email' placeholder="Enter your email address" />

          <label className="label font-bold">Password</label>
          <input type="password" className="input w-full" name='password' placeholder="Enter your password" />

          <button onClick={loadPage} className="btn bg-[#403F3F] text-white mt-4 mb-4">Login</button>
          <div className="link link-hover text-center">Don’t Have An Account ? <Link to="/auth/register"> <span className='text-red-500 underline'>Register</span></Link></div>
          
        </form>
      </div>
    </div>

</div>
    );
};

export default Login;