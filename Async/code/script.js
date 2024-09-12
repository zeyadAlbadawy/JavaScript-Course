// 'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// // SIMPLE XMLHTTPREQUEST
// // const getSpecificData = function (countryName) {
// //   const request = new XMLHttpRequest();
// //   request.open(
// //     'GET',
// //     `https://countries-api-836d.onrender.com/countries/name/${countryName}`
// //   );
// //   request.send();
// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);
// //     const html = `
// //     <article class="country">
// //           <img class="country__img" src="${data.flag}" />
// //           <div class="country__data">
// //             <h3 class="country__name">${data.name}</h3>
// //             <h4 class="country__region">${data.region}</h4>
// //             <p class="country__row"><span>👫</span>${(
// //               data.population / 1e6
// //             ).toFixed(1)} ${'M'}</p>
// //             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// //             <p class="country__row"><span>💰</span>${
// //               data.currencies[0].name
// //             }</p>
// //           </div>
// //         </article>
// // `;
// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// // const getSpecificData = function (countryName) {
// //   // First AJAX CALL
// //   const request = new XMLHttpRequest();
// //   request.open(
// //     'GET',
// //     `https://countries-api-836d.onrender.com/countries/name/${countryName}`
// //   );
// //   request.send();
// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);
// //     renderElmnt(data);

// //     const [init, countryCode] = data?.borders;
// //     if (!countryCode) return;
// //     // SECOND AJAX CALL
// //     const request2 = new XMLHttpRequest();
// //     request2.open(
// //       'GET',
// //       `https://countries-api-836d.onrender.com/countries/alpha/${countryCode}`
// //     );
// //     request2.send();
// //     request2.addEventListener('load', function () {
// //       const data2 = JSON.parse(this.responseText);
// //       renderElmnt(data2, 'neighbour');
// //     });
// //   });
// // };

// const renderElmnt = function (data, className = '') {
//   const html = `
//     <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               data.population / 1e6
//             ).toFixed(1)} ${'M'}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>
// `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// // Promises
// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// };

// // const getSpecificCountry = function (countryName) {
// //   fetch(`https://countries-api-836d.onrender.com/countries/name/${countryName}`)
// //     .then(Response => Response.json())
// //     .then(data => {
// //       renderElmnt(data[0]);
// //       const countryCode = data[0].borders?.[0];
// //       if (!countryCode) return;
// //       return fetch(
// //         `https://countries-api-836d.onrender.com/countries/alpha/${countryCode}`
// //       );
// //     })
// //     .then(Response => Response.json())
// //     .then(data => {
// //       renderElmnt(data, 'neighbour');
// //       const countryCode = data.borders?.[0];
// //       if (!countryCode) return;
// //       return fetch(
// //         `https://countries-api-836d.onrender.com/countries/alpha/${countryCode}`
// //       );
// //     })
// //     .then(Response => Response.json())
// //     .then(data => renderElmnt(data, 'neighbour'))
// //     .catch(err => {
// //       console.error(err);
// //       renderError(err.message);
// //     })
// //     .finally(() => (countriesContainer.style.opacity = 1));
// // };

// // Error Throwing

// const renderCountry = function (countryName) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${countryName}`)
//     .then(Response => {
//       if (!Response.ok)
//         throw new Error(`Country Not Found (${Response.status})`);
//       return Response.json();
//     })
//     .then(data => {
//       renderElmnt(data[0]);
//       const neighbour = data[0].borders?.[2];
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//       );
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country Neighbour Not Found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderElmnt(data, 'neighbour'))
//     .catch(err => {
//       console.log(err);
//       renderError(err.message);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };
// // renderCountry('qatar');
// // btn.addEventListener('click', () => renderCountry('Qatar'));

// // const whoAmI = function (lat, lng) {
// //   fetch(
// //     `https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
// //   )
// //     .then(Response => {
// //       if (!Response.ok)
// //         throw new Error(`Problem With Geocoding (${Response.status})`);
// //       return Response.json();
// //     })
// //     .then(data => {
// //       console.log(data);
// //       if (!data)
// //         throw new Error(
// //           `The Coordinates Provided Are Not Valid (${Response.status}`
// //         );
// //       renderCountry(data.countryName);
// //       console.log(
// //         `You Are in ${data.locality}, ${data.countryName.split(' ')[0]}`
// //       );
// //     })
// //     .catch(err => console.error(`${err.message} `));
// // };

// // whoAmI(40, 30);
// // whoAmI(52.52, 13.405);
// // whoAmI(30.0444, 31.2357);

// // console.log('Test Started');
// // setTimeout(() => {
// //   console.log('0 sec passed');
// // }, 0);

// // Promise.resolve('First Promise Has Resolved').then(res => {
// //   for (let i = 0; i <= 10000000000; i++) {}
// //   console.log('Promise 1 Done');
// // });
// // console.log('Test Ended');

// // Create Promises =>

// // const lotteryPromise = new Promise(function (resolve, reject) {
// //   console.log('Lottery Started');
// //   setTimeout(() => {
// //     if (Math.random() >= 0.5) resolve('WINNER');
// //     else reject('LOSER');
// //   }, 2000);
// // });

// // lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // const wait = function (seconds) {
// //   return new Promise(function (resolve) {
// //     setTimeout(resolve, seconds * 1000);
// //   });
// // };

// // wait(1)
// //   .then(() => {
// //     console.log('1 second passed');
// //     return wait(1);
// //   })
// //   .then(() => console.log('2 Second PAssed'));

// // const getCurrPos = function () {
// //   return new Promise(function (resolve, reject) {
// //     navigator.geolocation.getCurrentPosition(
// //       position => resolve(position),
// //       err => reject(err)
// //     );
// //   });
// // };

// // getCurrPos()
// //   .then(pos => console.log(pos))
// //   .catch(err => console.error(err));

// // Challenge no_02

// const wait = function (noOfSeconds, img = '') {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(img), noOfSeconds * 1000);
//   });
// };

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     let img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       document.querySelector('.images').appendChild(img);
//       console.log(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function (err) {
//       reject(new Error('No Message Has Found!'));
//     });
//   });
// };

// const hideImage = function () {
//   return new Promise(function (resolve) {
//     const imgs = document.querySelector('.images').querySelectorAll('img');
//     imgs.forEach(img => (img.style.display = 'none'));
//   });
// };

// // wait(2)
// //   .then(() => createImage('../img/img-1.jpg'))
// //   .then(img => wait(2, img))
// //   .then(currimg => {
// //     currimg.style.display = 'none';
// //     return wait(2);
// //   })
// //   .then(() => {
// //     return createImage('../img/img-2.jpg');
// //   })
// //   .then(img => wait(2, img))
// //   .then(currimg => (currimg.style.display = 'none'));

// /// Async Await
// const getCurrPos = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve(position),
//       err => reject(err)
//     );
//   });
// };

// const whereAmI = async function () {
//   try {
//     const locationGeo = await getCurrPos();
//     if (!locationGeo) throw new Error('Enable Site Setting');
//     const { latitude: lat, longitude: lng } = locationGeo.coords;
//     const country = await fetch(
//       `https://api-bdc.net/data/reverse-geocode-client?latitude=${la33t}&longitude=${lng}&localityLanguage=en`
//     );
//     if (!country.ok) throw new Error('Something Went Wrong With location!');

//     const res = await country.json();
//     renderCountry(res.countryName);
//     return 'You Are Ugly!';
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// whereAmI()
//   .then(msg => console.log(msg))
//   .catch(err => console.log(`${err.message} 😶‍🌫️😶‍🌫️`))
//   .finally(() => console.log('Done!'));

// const rept = async function () {
//   try {
//     const res1 = await whereAmI();
//     console.log(res1);
//   } catch (err) {
//     console.log(`${err.message} 😶‍🌫️😶‍🌫️`);
//   }
//   console.log('Done!');
// };
// rept();

// // Promise.race

// console.log('=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
// const getJSON = async function (url, errorMsg = 'Something went wrong') {
//   const response = await fetch(url);
//   if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//   return response.json();
// };

// const awaitFunc = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(() => reject(new Error('Took Too Long!')), sec * 1000);
//   });
// };

// const promiseRaceImplement = async function (countryName) {
//   const res = await Promise.race([
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/egypt`),
//     awaitFunc(0.2),
//   ]);
//   return res;
// };

// promiseRaceImplement()
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Failure'),
// ]).then(res => console.log(res));

// ///////////
const wait = async function (noOfSeconds, img = '') {
  const res = await new Promise(function (resolve, reject) {
    setTimeout(() => resolve(img), noOfSeconds * 1000);
  });
  return res;
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      document.querySelector('.images').appendChild(img);
      resolve(img);
    });
    img.addEventListener('error', function (err) {
      reject(new Error('No Message Has Found!'));
    });
  });
};

const hideImage = function () {
  return new Promise(function (resolve) {
    const imgs = document.querySelector('.images').querySelectorAll('img');
    imgs.forEach(img => (img.style.display = 'none'));
  });
};

const finalRes = async function () {
  try {
    await wait(2);
    const img = await createImage('../img/img-1.jpg');
    const currImg = await wait(2, img);
    currImg.style.display = 'none';
    await wait(2);
    const img2 = await createImage('../img/img-2.jpg');
    const currImg2 = await wait(2, img2);
    currImg2.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};

// finalRes();

// wait(2)
//   .then(() => createImage('../img/img-1.jpg'))
//   .then(img => wait(2, img))
//   .then(currimg => {
//     currimg.style.display = 'none';
//     return wait(2);
//   })
//   .then(() => {
//     return createImage('../img/img-2.jpg');
//   })
//   .then(img => wait(2, img))
//   .then(currimg => (currimg.style.display = 'none'));

// Challenge _03 part_02
let imgs;
const loadAll = async function (imgsArrayPath) {
  imgs = imgsArrayPath.map(async function (currImg) {
    return await createImage(currImg);
  });
  imgs = await Promise.all(imgs);
  imgs.forEach(img => img.classList.add('parallel'));
};

loadAll(['../img/img-1.jpg', '../img/img-2.jpg', '../img/img-3.jpg']);

let s = '       Let me Fly        ';
console.log(s.trim());
