/*
// Promise method
const getCountry = (cc) => {
    return fetch('http://restcountries.eu/rest/v2/all', {}).then((resolve) => {
        if(resolve.status === 200){
            return resolve.json()
        }
        else{
            throw new Error('Unable to Fetch Country Data')
        }
//        return resolve.status === 200 ?  resolve.json() : new Error('Unable to Fetch Country Data')
        
    }).then((data) => {
        const countryName = data.find((item) =>item.alpha2Code === cc);
        return countryName.name;
    });
}

*/

// async mathod

const getCountry = async (cc) => {
    const resolve = await fetch('http://restcountries.eu/rest/v2/all')
    
    if(resolve.status === 200){
            const data =  await resolve.json()
            return data.find((item) =>item.alpha2Code === cc);
        }
    else{
        throw new Error('Unable to Fetch Country Data') 
    }
}




// Get Location

//const getLocation = () => {
//  return fetch('http://ipinfo.io/json?token=ecf12a043be1f0').then((resolve) => {
//     if(resolve.status === 200){
//         return resolve.json();
//     }
//      else {
//          throw new Error(`Can't fetch Location`)
//      }
//  })
//};
//

// Async method

const getLocation = async () => {
  const response = await fetch('http://ipinfo.io/json?token=ecf12a043be1f0')
  
     if(response.status === 200){
         return await response.json(); // don't need to use await here
     }
      else {
          throw new Error(`Can't fetch Location`)
      }
};




const getCurrentCountryName = async () => {
    const gLocation = await getLocation();
    const countryName = await getCountry(gLocation.country);
    return countryName;
    // return getCountry(gLocation.country);
}






//
//new Promise((resolve, reject)=>{
//        const countryRequest = new XMLHttpRequest();
//
//        countryRequest.addEventListener('readystatechange', (e) =>{
//            if(e.target.readyState === 4 && e.target.status === 200){
//
//                const data = JSON.parse(e.target.responseText);
//
//                const countryName = data.find((item) =>item.alpha2Code === cc);
//                const countryData = countryName.name;
//                resolve(countryData)
//            }
//            else if(e.target.readyState === 4){
//                reject(`Data isn't exists`)
//            }
//        });
//
//        countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
//        countryRequest.send();
//    });


