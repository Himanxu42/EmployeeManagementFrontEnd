const  axios  = require('axios').default;
const moment = require('moment');
const {getInterval,getUnit } = require('../Utility/utilty')
  
 const loginUser = (user) => {
     return axios.post('http://localhost:8000/api/login',
        user
     )
      .then(function (response) {
          return response
      })
      .catch(function (error) {
        console.log(error);
      });
}

const authenticate = (data) => {
  console.log(data);
  if (typeof window !== undefined) {
    console.log(data)
    localStorage.setItem('JWTToken', JSON.stringify(data));
    const expiresAt = data.expiresAt;
    const interval = parseInt(getInterval(expiresAt));
    const unit = getUnit(expiresAt);
    const expire = moment().add(interval, unit);
    console.log(expire);
    localStorage.setItem('expire', JSON.stringify(expire));
  }
}

const authenticated = () => {
  const expire = localStorage.getItem('expire')
  if (typeof window === undefined || !moment().isBefore(moment(JSON.parse(expire)))) return false;
  const user = JSON.parse(localStorage.getItem('JWTToken'));
  console.log(user)
  return { user }
  
}

const logout = () => {
  localStorage.removeItem('JWTToken');
  localStorage.removeItem('expre')
}
module.exports = { loginUser, authenticate, authenticated,logout }

