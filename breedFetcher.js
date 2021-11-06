const fetchBreedDescription = function(breedName, callback) {
  const request = require("request");
};

// // Access the first entry in the data array and print out the description for the user.
// const breedName = process.argv.slice(2)[0];         
// //request('URL', callback function with (error, response, body) parameters)
// request('https://api.thecatapi.com/v1/breeds/search?q=Siberian', (error, response, body) => {
//   console.log(typeof body);
//   const data = JSON.parse(body);
//   //console.log(data);          ===> gives the whole data of the URL
//   const description = data[0]['description'];
//   // const description = data[0].description;     ====> DIFFERENT way to get the content of the description key
//   // const {description} = data[0];             ====> DIFFERENT way to get the content of the description key

//   console.log(typeof data);
//   console.log(description);
// })






// const request = require("request");
// // Allow the user to specify the breed name using command-line arguments 
// // (eg)  node breedFetcher.js Chartreux on terminal
// const breedName = process.argv.slice(2)[0];         
// request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
//   console.log(typeof body);
//   const data = JSON.parse(body);
//   //console.log(data);          ===> gives the whole data of the URL
//   const description = data[0]['description'];
//   // const description = data[0].description;     ====> DIFFERENT way to get the content of the description key
//   // const {description} = data[0];             ====> DIFFERENT way to get the content of the description key

//   console.log(typeof data);
//   console.log(description);
// })

module.exports = { fetchBreedDescription };

