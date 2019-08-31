const Application = require('../libs/Application');

const nodeAddress = "http://172.16.2.51:2500";

async function findAppInfo(app) {
    const result = await app.findAppInfo("1");
    console.log(result);
}

const app = new Application( nodeAddress);
findAppInfo(app);
