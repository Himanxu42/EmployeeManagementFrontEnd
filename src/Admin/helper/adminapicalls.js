//import { API } from '../../backend';
const axios = require('axios')
//Department
export const AddDept = (name) => {
    return axios.post('http://localhost:8000/api/adddepartment', {
       name : name
      })
      .then(function (response) {
          return response;
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const delDept = (name) => {
    console.log(name);
    return axios.delete('http://localhost:8000/api/delete', {
        data: {
            name : name
        }
      })
      .then(function (response) {
          return response;
      })
      .catch(function (error) {
        console.log(error);
      });
};

export function getDepts () {
    return fetch('http://localhost:8000/api/getdept', {
        method: "GET",
    }).then(response => {
        console.log(response)
        return response.json();
    }).catch(err=> console.log(err))
}

//Position
export const AddPos = (name) => {
    return axios.post('http://localhost:8000/api/addposition', {
       name : name
      })
      .then(function (response) {
          return response;
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const delPos = (name) => {
    console.log(name);
    return axios.delete('http://localhost:8000/api/delete/position', {
        data: {
            name : name
        }
      })
      .then(function (response) {
          return response;
      })
      .catch(function (error) {
        console.log(error);
      });
};

export function getPos () {
    return fetch('http://localhost:8000/api/getpositions', {
        method: "GET",
    }).then(response => {
        console.log(response)
        return response.json();
    }).catch(err=> console.log(err))
}

//Employee
export const addEmp = (data) => {
    return axios.post('http://localhost:8000/api/addemployee', {
        name: data.name,
        email: data.email,
        password:data.password,
        phone: data.phone,
        address: data.address,
        salary: data.salary,
        role: data.role,
        department: data.department,
        position : data.position
       })
       .then(function (response) {
           return response;
       })
       .catch(function (error) {
         console.log(error);
       });
}

export const getAllEmp = () => {
    return fetch('http://localhost:8000/api/getallemployee', {
        method: "GET",
    }).then(response => {
        console.log(response)
        return response.json();
    }).catch(err=> console.log(err))
}

export const delEmp = (data) => {
    return axios.delete('http://localhost:8000/api/delete/employee', {
        data: {
            email : data.email
        }
      })
      .then(function (response) {
          return response;
      })
      .catch(function (error) {
        console.log(error);
      });
}