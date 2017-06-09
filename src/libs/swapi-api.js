//Custom SWAPI API using Promises
import Promise from '/system/promises.core.min';

class SWAPI {

  constructor(baseURL="https://swapi.co/api") {
      this.baseURL = baseURL;
  }

  // internal common method to do the API call
   __callAPI(method) {

     const url = `${this.baseURL}${method}`;
     //console.log("URL called: " + url);
     return new Promise((resolve, reject) => {

       let http = Ti.Network.createHTTPClient({timeout: 20000});

       http.onload = () => {
         const json = JSON.parse(http.responseText);
         resolve(json);
       }

       http.onerror = (e) => {
         console.log("Error calling API Call");
         reject(e);
       }

       http.open("GET", url);
       http.setRequestHeader("Content-Type", "application/json");
       http.setRequestHeader('charset','utf-8');
       http.send();

     });

   }

  // get the available info options for initial display
  availableInfo() {
    return this.__callAPI('/');
  }

  // get list of category related data
  categoryList(category) {
    return this.__callAPI('/' + category);
  }

}

export default SWAPI;
