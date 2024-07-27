import { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { collection, getDocs } from "firebase/firestore";
import { projectFirestore } from "@/firebase/config";
import NewUser from "./NewUser";

const Home = () => {

  const [fullname,setFullName] = useState("");
  const [age,setAge] = useState(0);
  const [job,setJob] = useState("");


  const getData = async () => {
    const querySnapshot = await getDocs(collection(projectFirestore,"users"))
    querySnapshot.forEach((one_data) => {
      setFullName(one_data.data()["fullname"]);
      setAge(one_data.data()["age"]);
      setJob(one_data.data()["job"]);
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return <div>

    <div>
      <NewUser />
    </div>

    <h1 className="m-5 text-3xl">Fullname :{fullname}</h1>
    <h1 className="m-5 text-3xl">Age :{age}</h1>
    <h1 className="m-5 text-3xl">Job :{job}</h1>
  </div>
}

export default Home;