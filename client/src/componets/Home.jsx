  import React, { useState,useEffect } from "react";
 import axios from "axios";
  import { useNavigate } from "react-router-dom";


  export const Home = ({ onLogout }) => {
    const [inp1, setInp1] = useState("");
    const [inp2, setInp2] = useState("");
    const [searchedResult, setSearchedResult] = useState([]);
    const navigate = useNavigate();

    function handleInput1(e) {
      setInp1(e.target.value);
    }

    function handleInput2(e) {
      setInp2(e.target.value);
    }
   

    useEffect(() =>{
      const fetchData = async () => {
        try {
          const response = await axios("https://api.example.com/data");
         
          setSearchedResult(response.data);
        } catch (error) {
          console.error("Error fetching data:", error.message);
        }
      };
    fetchData();

    },[inp2])


    return (
      <div>
        <h2>Home</h2>
        <div >
          <h5>Submit text message</h5>
          <input type="text" value={inp1} onChange={""} />
        </div>
        <div>
          <button onClick={""}>Submit</button>
        </div>
        <div>
          <h5>Search message</h5>
          <input type="text" value={inp2} onChange={""} />
        </div>
        <div className="login">
          <button onClick={""}>Search</button>
        </div>
        <div className="login">
          <input type="text" value={searchedResult} readOnly />
        </div>
        <div>
          <button onClick={""}>ClearAll</button>
          <button onClick={""}>LogOut</button>
        </div>
      </div>
    );
  };

  export default Home