const express = require('express');
const app = express();
app.use(express.json());
app.post('/bfhl', (req, res) => {
  const { data} = req.body;
  const name="Harkaran";
  const dob="19102003";
  const email="harkarn1709.be21@chitkara.edu.in";
  const roll_number="2110991709";
  const userId = `${name}_${dob}`;
  const is_success = true;
  const evenNumbers = [];
  const oddNumbers = [];
  const alphabets = [];
  for (let num of data) {
    if (typeof num === 'number') {
      if (num % 2 === 0) {
        evenNumbers.push(num);
      } else {
        oddNumbers.push(num);
      }
    } else if (typeof num === 'string') {
      alphabets.push(num.toUpperCase());
    }
  }
  const response = {
    user_id: userId,
    is_success,
    email,
    roll_number,
    even_numbers: evenNumbers,
    odd_numbers: oddNumbers,
    alphabets
  };
  res.status(200).json(response);
});
app.get('/',(req,res)=>{
  res.send("<h1>Hello World</h1>");
})
app.listen(3000,()=>{
  console.log("server is running on port 3000");
});
