const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// UTIL FUNCTIONS
function processData(data) {
  let odd = [];
  let even = [];
  let alphabets = [];
  let special = [];
  let sum = 0;

  data.forEach(item => {
    if (!isNaN(item)) {
      let num = parseInt(item);
      if (num % 2 === 0) even.push(item.toString());
      else odd.push(item.toString());
      sum += num;
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
    } else {
      special.push(item);
    }
  });

  let concat = "";
  let alphaStr = alphabets.join(""); 
  let reversed = alphaStr.split("").reverse().join("");
  for (let i = 0; i < reversed.length; i++) {
    concat += i % 2 === 0 ? reversed[i].toUpperCase() : reversed[i].toLowerCase();
  }

  return {
    odd_numbers: odd,
    even_numbers: even,
    alphabets,
    special_characters: special,
    sum: sum.toString(),
    concat_string: concat
  };
}

// ROUTES 
app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const processed = processData(data);

    const response = {
      is_success: true,
      user_id: "eswar_reddy_boyi_8093",
      email: "eswarboyi7@gmail.com",
      roll_number: "22BCE8093",
      ...processed
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ is_success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
