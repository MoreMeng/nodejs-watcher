'use strict';

const isReachable = require('is-reachable');
const cron = require('node-cron');
const LineAPI = require('line-api');

require('dotenv').config();

const notify = new LineAPI.Notify({
    token: "r5rfqHBIr8j7Py5YLLJpo0zpWJnmiphaLArXRMPCpIU"
})

const target = {
    name: process.env.NAME,
    url: process.env.URL
};

cron.schedule('*/2 * * * *', () => {
    console.log("---------------------");
    console.log("Running Cron Job");
    //      let d = new Date(Date.now()).toLocaleString();
    //   console.log(`running a task every minute ${d}`);
    isReachable(target.url).then(reachable => {
        let d = new Date(Date.now()).toLocaleString();
        console.log(`[${d}] ${target.name}:  ✔ ${reachable}`);

        if (!reachable) {
            //   let msg = `[${d}] NodeJS: 💥 ${reachable}`
            let msg = `${target.name} : 💥 ไม่ตอบสนอง`
            notify.send({
                message: msg
            })
        }
    })
})

cron.schedule('* * * * *', () => {
    console.log("---------------------");
    console.log("Running Cron Job 2");
    //      let d = new Date(Date.now()).toLocaleString();
    //   console.log(`running a task every minute ${d}`);
    fetch("http://129.0.0.8:8009/token/")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(function (err) {
            console.log("Unable to fetch -", err);
        });
})