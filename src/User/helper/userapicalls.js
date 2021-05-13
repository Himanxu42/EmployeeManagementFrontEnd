const axios = require('axios')
const moment = require('moment')

export function checkPaid(str) {
  
  console.log(str);
  if (str) {
    return !moment().isBefore(moment(JSON.parse(str)));
  }
  
  
};
export const getAUser = (id) => {
     console.log(id)
    return axios.get(`http://localhost:8000/api/getemployee/${id}`)
        .then(user => {
          return user
        })
        .catch(err => {
        console.log(err)
    })
}

