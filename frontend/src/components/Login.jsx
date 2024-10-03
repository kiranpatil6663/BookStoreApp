import React from 'react'
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => { const userInfo={
    
    email:data.email,
    password:data.password

  }
 await axios.post("http://localhost:4001/user/login",userInfo)
  .then((res)=>{
    console.log(res.data);
    if(res.data){
      toast.success("login successfull")
       document.getElementById("my_modal_3").close()
      // localStorage.removeItem("Users");
      //       toast.success("logout successfully");
            setTimeout(()=>{
                window.location.reload();

            },3000);
     
    }
    localStorage.setItem("Users",JSON.stringify(res.data.user));
  })
  .catch((err)=>{
   if(err.response){
    console.log(err);
   
   
    toast.error("error : "+err.response.data.message)
    setTimeout(()=>{},3000);
   }
  })}
  return (
<>
<div>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)} >
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
       onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
    
    <h3 className="font-bold text-lg">Login</h3>
   <div className='mt-4 space-y-2'>
    <span>Email</span>
    <br/>
   
    <input type="email" placeholder="enter your email" className="w-80 px-3 py-1 rounded border-md outline-none " {...register('email', { required: true })} />
    {errors.email && <p className="text-red-500">email is required.</p>}
   </div>
   <div className='mt-4 space-y-2'>
    <span>Password</span>
    <br/>
    <input type="password" placeholder="enter your password" className="w-80 px-3 py-1 rounded border-md outline-none"  {...register('password', { required: true })} />
    {errors.password && <p className="text-red-500">passwrod is required.</p>}
    
   
   </div>
   <div className="flex justify-around mt-6">
   <button className="bg-pink-500 px-4 py-2 text-white rounded-md hover:bg-pink-700 duration-300">Login</button>
   <p className="mt-2">not registered ? <Link to="/signup"className=" underline text-blue-500  cursor-pointer">SignUp</Link ></p>
   </div>
   </form>
  </div>
</dialog>
</div>
</>
  )
}

export default Login
