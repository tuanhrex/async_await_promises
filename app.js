// Timing exercise 1
// Uncomment these lines and run them, observing the order that the logs happen
// How can you change it to log in the correct order?


// async function exercise1() {


// console.log('I should log before the data!');
// const res = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no');
// const json = await res.json();

// console.log(json)
// console.log('I should log after the data!');

// }

// exercise1();


// console.log('I should log before the data!');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) => {
//     console.log(json);
//     console.log('I should log after the data!');
// })



// ========================================

// Timing exercise 2: slightly more complicated




// console.log('I should be before the cats data');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) => {
//     console.log(json);
//     console.log('I should be between the cats and dogs');
// })

// fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
// .then((res) => res.json()).then((json) => {
//     console.log(json);
//     console.log('I should be last');
// })



// async function exercise2() {

// console.log('I should be before the cats data');
// const res = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no');
// let json = await res.json();

// console.log(json)
// console.log('I should be between the cats and dogs');
// }
// async function exercise22() {
// const respond = await fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no');
// let json1 = await respond.json();
// console.log(json1)
// console.log('I should be last');
// }

// async function final() {
//     const cats = await exercise2();
//     const dogs = await exercise22();
//     return cats, dogs;
    
// }

// final();


const successfulPromise = new Promise(function(resolve, reject) {
    // in here, you must invoke either resolve or reject!
   
    setTimeout(resolve, 5 * 1000)
   
  


  })

  console.log(successfulPromise);

  const unsuccessfulPromise = new Promise(function(resolve, reject) {
    setTimeout(reject, 5 * 1000)

  })

  console.log(unsuccessfulPromise);

  setTimeout(function() {
    console.log(successfulPromise);
    console.log(unsuccessfulPromise);
  }, 6000)


  const conditionalPromise = (input) => new Promise(function(resolve,reject) {
      if (input === true) {
          resolve();
      } else {
          reject();
      }
  })


  function myFetch(url) {
      const mPromise = new Promise(function(resolve, reject) {

            const webData = somehowGetWebData();
            if (webData.statusCode < 400) {
                resolve();
            } else (400 <= webData.statusCode <= 599){
                reject();
            }
      })
      return myPromise;
      
  }