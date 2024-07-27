import React from 'react';
import { projectFirestore } from '@/firebase/config';
import { addDoc, collection } from 'firebase/firestore';

const NewUser = () => {

  const addUser = (e) => {
    e.preventDefault();
    
    addDoc(collection(projectFirestore,"users"),{
        fullname : e.target[0].value,
        age : e.target[1].value,
        job : e.target[2].value
    })
  }  

  return <>
    <form method='post' onSubmit={addUser}>
        <input className='m-2 border-black w-40 bg-black text-white rounded' type='text' /> <br />
        <input className='m-2 border-black w-40 bg-black text-white rounded' type='text' /> <br />
        <input className='m-2 border-black w-40 bg-black text-white rounded' type='text' /> <br />
        <input className='m-2 border-black w-40 bg-red-800 text-white rounded' type='submit' value={"Add User"} />
    </form>
  </>
}

export default NewUser;