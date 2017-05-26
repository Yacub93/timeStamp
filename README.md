# Timestamp Microservice App

A simple, timestamp application that was built using the NodeJS. You can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: 30 March 2017). Both values are given as a JSON response.

# Example 

* URL: 
localhost:3000/dateValues/March%2030,%302017

* JSON response:
{
  "unix": 1490828400,
  "natural": "Thursday, March 30, 2017"
}

## TODO
 * Format date using Moment.js