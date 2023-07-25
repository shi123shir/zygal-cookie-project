const fs = require("fs")
const jwt = require("jsonwebtoken")
const path = require("path");

const userJsonPath = path.join(__dirname, "..", "user.json");

const userData = JSON.parse(fs.readFileSync(userJsonPath));





const userLogin = async(req,res) =>{
    try {

        const { email_id, password } = req.body;
    

        const user = userData.find(
          (u) => u.email_id === email_id && u.password === password
        );

        if (user) {

          const token = await jwt.sign({ email_id }, "secretKey", { expiresIn: "1h" });

          res.cookie("token", token);
          res.send({ token});
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
        
    } catch (error) {
         return res
         .status(500).send({message:"server error", error:error.message})
    }
}


const createMessage = async (req,res)=>{
    try {
        const {data} = req.body
        if(!req.cookies.message){
            const arr = [data]
            const sing =  JSON.stringify(arr)
            res.cookie("message",sing)
            res.send(sing)
        } else{
        const parsedVal =  await JSON.parse(req.cookies.message);
        if(parsedVal.includes(data)){
            return res.status(400).send({message:"this message is already exists"})
        }
        const update =    [...parsedVal,data]
        const finalval =  JSON.stringify(update)
        const finalForSure = decodeURIComponent(finalval)
       res.cookie("message", finalForSure);
   
        res.status(200).send(finalval)
        }
        console.log(req.cookies.message)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const searchData = async (req,res)=>{
try {

    const { searchTerm } = req.params;
   
    const messages = await JSON.parse ( req.cookies.message)
      const searchedData = await messages.filter((message) =>
      
        message.includes(searchTerm)
      );
      console.log(searchedData)
       
      res.status(200).send(searchedData);

} catch (error) {
    res.status(500).send(error.message)
    
}
}
const clearData = async (req,res)=>{
try {
    
     res.clearCookie("message");
     res.status(200).send("data deleted successful")

} catch (error) {
    res.status(500).send(error.message)
    
}
}

const logout = (req,res)=>{
 try {
    
    res.clearCookie("token")
    res.status(200).send("logout successful")
    
 } catch (error) {
       res.status(500).send(error.message);
 }
}

module.exports = { userLogin,createMessage, searchData,clearData,logout}