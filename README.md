# BFHL API – Full Stack Question Paper Project

## Description
This is a REST API built with **Node.js** that processes an array input and returns:

- Status (`is_success`)
- User ID (`user_id`)
- Email (`email`)
- College Roll Number (`roll_number`)
- Arrays for even numbers, odd numbers, alphabets (uppercase), special characters
- Sum of numbers (as string)
- Concatenation of all alphabetical characters in **reverse order** with **alternating caps**

The API follows the requirements of the Full Stack Question Paper project and is hosted on **Render**.

---

## Technology Stack
- Node.js
- Express.js
- body-parser
- CORS

---

## API Endpoint
**Method:** POST  
**Route:** `/bfhl`  
**Hosted URL:** [https://bfhl-pkmk.onrender.com/bfhl](https://bfhl-pkmk.onrender.com/bfhl)

---

## Request Example

**POST JSON Body:**
```json
{
  "data": ["a","1","334","4","R","$"]
}
````
**Response Example:**
json
````
{
  "is_success": true,
  "user_id": "eswar_reddy_boyi_8093",
  "email": "eswarboyi7@gmail.com",
  "roll_number": "22BCE8093",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
````

How to Run Locally
Clone the repository: git clone [https://github.com/22BCE8093-Eswar/BHFL.git](https://github.com/22BCE8093-Eswar/BFHL)
cd bfhl_api
Install dependencies:
```
npm install
````
Run the server:
````
node index.js

````


Test API using PowerShell:
(Invoke-WebRequest -Uri "http://localhost:5000/bfhl" -Method POST -ContentType "application/json" -Body '{"data":["2","a","y","4","&","*","5","92","b"]}').Content
Frontend Usage
Open index.html in a browser.

Enter a JSON array in the input box, e.g.:

json
Copy code
["a","1","334","4","R","$"]
Click Submit to see the API response.

Note: Make sure the fetch() URL in index.html points to the deployed API:
js
````
fetch("https://bfhl-pkmk.onrender.com/bfhl")
````

**Deployment**
API hosted on Render: https://bfhl-pkmk.onrender.com/bfhl

frontend: https://bfhl-test-api.netlify.app/

Author
Name: Eswar Reddy Boyi

Email: eswarboyi7@gmail.com

College Roll Number: 22BCE8093
