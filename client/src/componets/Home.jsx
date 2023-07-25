  import React, { useState,useEffect } from "react";
 import axios from "axios";
  import { useNavigate } from "react-router-dom";


  export const Home = ({ onLogout }) => {
    const [inp1, setInp1] = useState("");
    const [inp2, setInp2] = useState("");
    const [searchButton,setsearchButton] = useState(false)
    const [searchedResult, setSearchedResult] = useState([]);
    const navigate = useNavigate();

    function handleinp1(e) {
      setInp1(e.target.value);
    }

    function handleInp2(e) {
      setInp2(e.target.value);
    }
   
    function handleSearch (){
        setsearchButton(true);
    }


    useEffect(() =>{
      const fetchData = async () => {
        try {
          const response = await axios(`https://localhost:5000/search/${inp2}`);
          setSearchedResult(response.data);
          searchButton(false)
        } catch (error) {
          console.error("Error fetching data:", error.message);
          searchButton(false)
        }
      };
    fetchData();

    },[searchButton])


    return (
      <div>
        <h2>Home</h2>
        <div>
          <h5>Submit text message</h5>
          <input type="text" value={inp1} onChange={handleinp1} />
        </div>
        <div>
          <button onClick={""}>Submit</button>
        </div>
        <div>
          <h5>Search message</h5>
          <input type="text" value={inp2} onChange={handleInp2} />
        </div>
        <div>
          <button onClick={handleSearch}>Search</button>
        </div>
        <div>
          {searchedResult.map((item, index) => (
            <input key={index} value={item} readOnly />
          ))}
        </div>
        <div>
          <button onClick={""}>ClearAll</button>
          <button onClick={""}>LogOut</button>
        </div>
      </div>
    );
  };

  export default Home