import axios from 'axios';
import { serverUrl, jwtToken } from './config';

const Web3 = require("web3");
let baseURL = serverUrl;
console.log('baseURL', baseURL);


const getUserAddress = async () => {
    const web3 = new Web3(window.ethereum);
    const accounts = await Web3.eth.getAccounts(); 
    return accounts[0];
}

export const getData = (path) => {
    return axios.get(baseURL+ path)
        .then(response => {
            // console.log(response);
            return response;
        })
};

const config = {
  headers: { Authorization: jwtToken }
};

const instance = axios.create({
  baseURL: baseURL,
  headers: {'Authorization': `Bearer ${jwtToken}`}
});


export const updateAsset = async (userData) => {
  console.log('UserData for DB:', userData);
  // return await axios.get(baseURL+'api/admin/assets/all', config)
  return await axios.post(baseURL+'api/admin/updateAsset', userData, config)
  .then((res, err) => {
    if (err) {
        console.log('ERROR from server:', err);
        throw(err);
      }
    console.log('res from server: ', res);
    return {
        "status": true,
        "data": res
    }
  })
  .catch((err) => {
      console.log('ERROR while updateAsseet:', err);
    return {
        "status": false,
        "data": err
    }
  });
}

export const getAllAssets = async () => {
  // return await instance.get('api/admin/assets/all')
  return await axios.get(baseURL+'api/admin/assets/all', config)
  .then((res, err) => {
    if (err) {
        console.log('ERROR from server:', err);
        throw(err);
      }
    console.log('res from server: ', res);
    return {
        "status": true,
        "data": res.data
    }
  })
  .catch((err) => {
      console.log('ERROR while getAllAssets:', err);
    return {
        "status": false,
        "data": err
    }
  });
}

export const getAssetsById = async (id) => {
  console.log('Fetching asset by Id:', id);
  return await instance.get('api/admin/asset/'+id)
  .then((res, err) => {
    if (err) {
        console.log('ERROR from server:', err);
        throw(err);
      }
    console.log('res from server: ', res);
    return {
        "status": true,
        "data": res.data
    }
  })
  .catch((err) => {
      console.log('ERROR while getAssetsById:', err);
    return {
        "status": false,
        "data": err
    }
  });
}

export const getEthPrice = async () => {
  return await axios.get('https://api.coinbase.com/v2/prices/ETH-USD/buy')
  .then((res, err) => {
    if (err) {
        console.log('ERROR from server:', err);
        throw(err);
      }
    console.log('res from server: ', res);
    return {
        "status": true,
        "data": res.data
    }
  })
  .catch((err) => {
      console.log('ERROR while createAsseet:', err);
    return {
        "status": false,
        "data": err
    }
  });
}

export const updateDBwithToken = async (userData, nftJson) => {
        console.log('UserData for DB:', userData);
      return await axios.post(baseURL + "/assets/", userData)
      .then((res, err) => {
        if (err) {
            console.log('ERROR from db:', err);
            throw(err);}
        console.log('res from server: ', res);
        return {
            "status": true,
            "data": res
        }
      })
      .catch((err) => {
          console.log('ERROR while updateDBwithToken:', err);
        return {
            "status": false,
            "data": err
        }
      });
}

export const updateDBwithTokenId = async (userData, currentUserId) => {
        console.log('UserData for DB:', userData, currentUserId);
        userData.ownerID = currentUserId;
      return await axios.put(baseURL + "/assets/", userData)
      .then((res, err) => {
        if (err) {
            console.log('ERROR from db:', err);
            throw(err);}
        console.log('res from server: ', res);
        return {
            "status": true,
            "data": res
        }
      })
      .catch((err) => {
          console.log('ERROR while updateDBwithToken:', err);
        return {
            "status": false,
            "data": err
        }
      });
}
