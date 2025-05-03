import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Firebase/AuthProvider';

const Register = () => {
    const {createUser, setUser} = use(AuthContext);

    const handelRegister=(e)=>{
        e.preventDefault();
        const name =e.target.name.value;
        const url =e.target.url.value;
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(name, url, email, password);

        // createUser function call
        createUser(email, password)
        .then(result=>{
            setUser(result.user);
        })
        .catch(error=>{
            alert(error.message);
        })
    }

    return (
        <div className="hero mt-10">

    <div className="shadow-2xl ">
      <div className="card-body border-2 border-amber-300 w-[700px] h-[640px]">
        
        <form onSubmit={handelRegister} className="fieldset p-6 space-y-3">
        <h1 className='font-bold text-2xl text-center mb-4'>Register your account</h1>
        <div className='border mb-4 text-[#E7E7E7]'></div>

          <label className="label font-bold">Your Name</label>
          <input type="text" className="input w-full" name='name' placeholder="Enter your name" />

          <label className="label font-bold">Photo URl</label>
          <input type="text" className="input w-full" name='url' placeholder="Enter your password" />

          <label className="label font-bold">Email address</label>
          <input type="email" className="input w-full" name='email' placeholder="Enter your email address" />

          <label className="label font-bold">Password</label>
          <input type="password" className="input w-full" name='password' placeholder="Enter your password" />

            
         <label className="label">
           <input type="checkbox" defaultChecked className="checkbox" />
           Accept Term & Conditions
         </label>

          <button className="btn bg-[#403F3F] text-white mt-4 mb-4">Register</button>
         
          
        </form>
      </div>
    </div>

</div>
    );
};

export default Register;