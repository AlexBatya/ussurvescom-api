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

const axiosConfigGet= (elem, url) => {
    return {
        method: 'GET',
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
        id: 2 
    }
    // const data = {
    //     title: 'Новое поступление весишек',
    //     description: 'Очень крутые и новые весики, только недавно завезли, пизда как рекомендую',
    //     date: '21.12.2022',
    //     logo: './img/logo.png',
    //     img_id: 8
    // }
    const ReqData = await axios(axiosConfigGet(data, '/api/news/create-getNews'))
    // const ReqData = await axios(axiosConfigPOST(data, '/api/news/create'))
    // const ReqData = await axios(axiosConfigDELETE(data, '/api/news/create'))
    console.log(ReqData.data)
})();