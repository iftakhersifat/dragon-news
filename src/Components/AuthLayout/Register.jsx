import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Firebase/AuthProvider';
import { FaEye } from 'react-icons/fa';

const Register = () => {
    const {createUser, setUser, UpdateUser} = use(AuthContext);

    const navigate =useNavigate();

    // error show
    const [error, setError] =useState('');

    // password checked
    const check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // show password
    const [showPassword, setShowPassword] = useState(false);
        

    const handelRegister=(e)=>{
        e.preventDefault();
        const name =e.target.name.value;
        const url =e.target.url.value;
        const email =e.target.email.value;
        const password =e.target.password.value;
        const terms =e.target.terms.checked;
        console.log(name, url, email, password, terms);

        // password checked
        if(check.test(password) != true){
          setError("at least one lowercase letter,  at least one  uppercase letter,  at least one digit (0–9), at least one special character, minimum 8 characters")
          return;
      }

      // terms checked
      if(!terms){
        setError("please accept our terms and conditions")
        return;
    }



        // createUser function call
        createUser(email, password)
        .then(result=>{
          const user = result.user;
          UpdateUser({displayName: name, photoURL: url})
          .then(()=>{
            setUser({...user, displayName: name, photoURL: url});
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
          navigate("/");
            
        })
        .catch(error=>{
            setError(error.message);
        })
    }

    return (
        <div className="hero mt-10">

    <div className="shadow-2xl ">
      <div className="card-body border-2 border-amber-300 w-[700px] h-[680px]">
        
        <form onSubmit={handelRegister} className="fieldset p-6 space-y-3">
        <h1 className='font-bold text-2xl text-center mb-4'>Register your account</h1>
        <div className='border mb-4 text-[#E7E7E7]'></div>

          <label className="label font-bold">Your Name</label>
          <input type="text" className="input w-full" name='name' placeholder="Enter your name" />

          <label className="label font-bold">Photo URl</label>
          <input type="text" className="input w-full" name='url' placeholder="Enter your photo url" />

          <label className="label font-bold">Email address</label>
          <input type="email" className="input w-full" name='email' placeholder="Enter your email address" />

          <label className="label font-bold">Password</label>
          <div className='relative'>
          <input type={showPassword ? "text" : "password"} 
                 className="input w-full" 
                 name='password' 
                 placeholder="Enter your password" />
          <button onClick={()=>setShowPassword(!showPassword)} className='absolute top-3 right-4'><FaEye size={14}></FaEye></button>
          </div>

          {
            error && <p className='text-red-500'>{error}</p>
          }

            
         <label className="label">
           <input type="checkbox" defaultChecked className="checkbox" name='terms' />
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