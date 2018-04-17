/**
 * Created by RBhatnagar on 4/8/2018.
 */
"use strict";
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import superagent from 'superagent';
import co from 'co';

module.exports = {
    returnData,
    setData
};


/*
 * Method to fetch the data from API (Uses Isomorphic Fetch)
 * */
function returnData(urlName, url) {
    console.log(urlName, url);
    /* isomorphic-fetch code below*/

    let options = {
     credentials: 'same-origin',
     method: 'GET',
     headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     }
     };
    /* if (overideOptions != null)
     options = overideOptions;*/
     return co(function *() {
     console.log('Inside returnData: ');

     var res = yield fetch(url, options);
     console.log('Inside returnData res: ', res);
     var json = yield res.json();
     console.log('Inside returnData: ', json);
     return json;
     }).catch(
         () => console.log("Can’t access " + url + " response. Blocked by browser?")
     );
}


export function setData(payload) {
    console.log(payload);
    return {
        payload: {
            type: 'FETCH_DATA_FULLFILMENT',
            value: payload

        }
    }
}

function setError(payload) {
    return {
        type: 'FETCH_DATA_ERROR',
        payload: payload
    }
}