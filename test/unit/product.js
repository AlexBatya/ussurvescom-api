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

(async() => {
    const data = {
        category_id: 1, 
        title: 3,
        description: 'Пиздатые весы',
        price: 100,
        img_id: 3 
    }
    const ReqData = await axios(axiosConfigPOST(data, '/api/product/create'))
    console.log(ReqData.data)
})();