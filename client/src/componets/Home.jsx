  import React, { useState } from "react";
 import axios from "axios";
  import { useNavigate } from "react-router-dom";
  import Cookies from "js-cookie";


  export const Home = () => {
    const [inp1, setInp1] = useState("");
    const [inp2, setInp2] = useState("");
    const [loding,setLoding] = useState(false)
    const [searchedResult, setSearchedResult] = useState([]);
    const navigate = useNavigate();

    function handleinp1(e) {
      setInp1(e.target.value);
    }
    function handleInp2(e) {
      setInp2(e.target.value);
    }
   
   
     async function submitMessage (){
      try {
        let cookie1Name = "token"
        const cookie1Value = Cookies.get(cookie1Name);
        console.log(cookie1Value)
        const  cookie2Name = "message"
        const cookie2Value = Cookies.get(cookie2Name)
          const headers = {
            Cookie: `${cookie1Name}=${cookie1Value}; ${cookie2Name}=${cookie2Value}`,
          };
        
        const response = await axios.post(
          `http://localhost:5000/message`,
          {
            data:inp1,
          },
          { headers: headers, withCredentials: true }
        );
        let fulldata = await response.data;

        // console.log(fulldata)

        Cookies.set("message",fulldata)
        setInp1("");
      } catch (error) {
        console.log(error.message)
      }
       
          //  Cookies.set("message",res.data)

         
    }

    function handelClear (){
      Cookies.remove("message")
    }
    function handleLogOut (){
      Cookies.remove("token")
      navigate("/")
    }


    
      const fetchData = async () => {
        try {
          setLoding(true)
          const response = await axios.get(`https://localhost:5000/search/${inp2}`);
          setSearchedResult(response.data);
          setLoding(false);
        } catch (error) {
          console.error("Error fetching data:", error.message);
          setLoding(false);
        }
      };
      


    return (
      <div>
        <h2>Home</h2>
        <div>
          <h5>Submit text message</h5>
          <input type="text" value={inp1} onChange={handleinp1} />
        </div>
        <div>
          <button onClick={submitMessage}>Submit</button>
        </div>
        <div>
          <h5>Search message</h5>
          <input type="text" value={inp2} onChange={handleInp2} />
        </div>
        <div>
          <button onClick={fetchData}>Search</button>
        </div>
        <div>
          {loding ? (
            searchedResult.map((item, index) => (
              <input key={index} value={item} readOnly />
            ))
          ) : (
            <input type="text" value={"not data found"} readOnly />
          )}
        </div>
        <div>
          <button onClick={handelClear}>ClearAll</button>
          <br />
          <button onClick={handleLogOut} >LogOut</button>
        </div>
      </div>
    );
  };

  export default Home