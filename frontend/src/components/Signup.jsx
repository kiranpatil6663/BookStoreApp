import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
  const userInfo={
    fullname:data.fullname,
    email:data.email,
    password:data.password

  }
 await axios.post("http://localhost:4001/user/signup",userInfo)
  .then((res)=>{
    console.log(res.data);
    if(res.data){
      
      toast.success("signup successfull")
      navigate(from,{replace:true});
    }
    localStorage.setItem("Users",JSON.stringify(res.data.user));
  })
  .catch((err)=>{
   if(err.response){
    console.log(err);
    toast.error("error : "+err.response.data.message)
   
   }
  })
}
  return (
    <>
    <div className="flex h-screen items-center justify-center">
        <div  className="  w-[600px] items-center justify-center align-text-center ">
      <div className="modal-box ">
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
          
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
      
        <h3 className="font-bold text-lg">SignUp</h3>
        <div className='mt-4 space-y-2'>
        <span>fullname</span>
        <br/>
        <input type="text" placeholder="enter your full name" className="w-80 px-3 py-1 rounded border-md outline-none " {...register('fullname', { required: true })} />
        {errors.fullname && <p className="text-red-500">name is required.</p>}
       </div>
       <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type="email" placeholder="enter your email" className="w-80 px-3 py-1 rounded border-md outline-none " {...register('email', { required: true })}/>
        {errors.email && <p className="text-red-500">email is required.</p>}
       </div>
       <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type="password" placeholder="enter your password" className="w-80 px-3 py-1 rounded border-md outline-none "  {...register('password', { required: true })} />
        {errors.password && <p className="text-red-500">passwrod is required.</p>}
       </div>
       <div className="flex justify-around mt-6">
       <button className="bg-pink-500 px-4 py-2 text-white rounded-md hover:bg-pink-700 duration-300">SignUp</button>
       <p className="mt-2 text-xl">not registered ? <Link to="/signup"className=" underline text-blue-500  cursor-pointer" onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</Link ></p>
<Login/>       </div>
</form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Signup
