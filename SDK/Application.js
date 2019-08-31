import "babel-polyfill";
const fetch = require("node-fetch");

async function getRequest (host, path) {
    const url = host + path;
    const config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }
    const response = await fetch(url, config)
    return await response.json();
}

async function postRequest (host, path, data) {
    const url = host + path
    const jsonData = JSON.stringify(data)
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: jsonData
    }
    const response = await fetch(url, config)
    return await response.json();
}

module.exports = class Application {
    constructor(nodeAddress) {
        this.nodeAddress = nodeAddress;
    }

    async findAppInfo(id) {
        const url =  '/manager/app/findAppInfo?id=' + id
        return await getRequest(this.nodeAddress, url);
    }
};
