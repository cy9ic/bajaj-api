const express = require("express");
const usersRouter = require("./routes/users");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", usersRouter);


app.post('/bfhl' , async (req , res)=>{
  try{
    const odd = [];
    const alphabets  = [];
    const even = [];
    
    const data = req.body.data;
    res.status(201).json({message:data});
    if(!data){
      return res.status(404).json({ message: 'Data not found!' });
    }

    for(const item of data){
      if(typeof Number(item) == "number"){
        const num = Number(item);
        if(num % 2 == 0){
          even.push(num);
        }else{
          odd.push(num);
        }
      }else{
        alphabets.push(item);
      }
    }  


    const response = {
      "is_success": true,
      "user_id": user_id,
      "email":emailId,
      "roll_number":roll,
      "odd_numbers": odd,
      "even_numbers": even,
      "alphabets": alphabets
    } 
      res.json(response);

    
  }catch(error){
    res.status(501).json({message:"An error has occured!" , errorMsg:error});
  } 
}
);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
