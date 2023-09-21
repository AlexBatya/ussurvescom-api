const axios = require('axios');

const urlAll = 'http://localhost:3000'

const axiosConfigPOST = (elem, url) => {
    return {
        method: 'POST',
        url: urlAll + url, 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ''
        },
        data: JSON.stringify(elem)
    }
};

const axiosConfigDELETE = (elem, url) => {
    return {
        method: 'DELETE',
        url: urlAll + url, 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ''
        },
        data: JSON.stringify(elem)
    }
};

(async() => {
    // const data = {
    //     id: 10 
    // }
    const data = {
        title: 'Автомобильные весы'
    } 
    const ReqData = await axios(axiosConfigPOST(data, '/api/category/create'))
    console.log(ReqData.data)
})();