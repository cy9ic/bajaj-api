const express =  'express';

const app = express();

app.get('/', async (req, res) => {
  try{
    res.send('Hello World!');
  }catch(error){
    res.status(401).json({error:error})
  }

const userId = "Harkaran_Singh_2110991709";
const email = "harkaran1709.be21@chitkara.edu.in";
const rollNumber = "2110991709";

app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;

    if (!data || !Array.isArray(data)) {
      throw new Error('Invalid request: data is missing or not an array');
    }

    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];

    for (const item of data) {
      if (typeof item === 'string') {
        alphabets.push(item.toUpperCase());
      } else if (typeof item === 'number') {
        if (item % 2 === 0) {
          evenNumbers.push(item);
        } else {
          oddNumbers.push(item);
        }
      } else {
        throw new Error('Invalid data type in array');
      }
    }

    const response = {
      is_success: true,
      user_id: userId,
      email: email,
      roll_number: rollNumber,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ is_success: false, error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Express server working');
});
