import express from 'express';

const app = express();

app.get('/', async (req, res) => {
  try{
    res.send('Hello World!');
  }catch(error){
    res.status(401).json({error:error})
  }
});

const emailId = "harkara1709.be21@chitkara.edu.in";
const roll = "2110991709";
const even = [];
const user_id = "Harkaran_Singh_19102003";
const odd = [];
const alphabets  = [];


app.post('/bfhh' , async (req , res)=>{
  const data = req.body.data;
   try{
     if(!data){
       return res.status(404).json({ message: 'Data not found!' });
     }
     const odd = [];
     const alphabets  = [];
     const even = [];
     
 
     res.status(201).json({message:data});


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
)

app.listen(3000, () => {
  console.log('Express server working');
});
