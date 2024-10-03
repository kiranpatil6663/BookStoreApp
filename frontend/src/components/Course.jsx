import React, { useState,useEffect } from 'react'
// import list from '../../public/list.json'
import Card from './Card'
import {Link} from 'react-router-dom';
import axios from 'axios';



function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
    try {
     const res=await axios.get("http://localhost:4001/book");
   
     setBook(res.data);
      
    } catch (error) {
      console.log(error);
      
    }
  }
    getBook();
  },[])
  return (
    <>
    <div className="max-wd-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center">
    <h1 className="text-2xl md:text-4xl ">We're delighted to have you  <span className="text-pink-500">Here :)</span></h1>
    <p className="mt-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, at aliquam. Tenetur similique assumenda fugit illum commodi est corrupti error. Aperiam, tempore architecto? Repudiandae maiores similique recusandae, quae quis praesentium.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi iusto dolores, esse magnam quae, officiis cum architecto accusantium est officia corporis accusamus magni deleniti provident at voluptas illo velit!</p>
        
        <Link to="/"><button className=" mt-6 bg-pink-500 px-4 py-2 text-white rounded-md hover:bg-pink-700 duration-300">Back</button>
        </Link> </div>
        <div className=" mt-12 space-between grid grid-cols-1 md:grid-cols-3">
            {book.map((item)=>(<Card key={item.id} item={item}/>))}
            </div>
            </div>
    </>
  )
}

export default Course
