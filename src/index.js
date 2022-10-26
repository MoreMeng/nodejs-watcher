'use strict';

const isReachable = require('is-reachable');
const cron = require('node-cron');
const LineAPI = require('line-api');

require('dotenv').config();

/**
 * Cron 1 : HOMC API
 */
cron.schedule('*/30 * * * *', () => {
  console.log("---------------------");
  console.log("Running: " + process.env.C1_NAME);

  isReachable(process.env.C1_URL).then(reachable => {
    let d = new Date(Date.now()).toLocaleString();
    console.log(`[${d}] ${process.env.C1_NAME}:  ✔ ${reachable}`);

    if (!reachable) {
      let notify = new LineAPI.Notify({
        token: process.env.C1_LINE_TOKEN
      })
      //   let msg = `[${d}] NodeJS: 💥 ${reachable}`
      let msg = `${process.env.C1_NAME} : 💥 ไม่ตอบสนอง`
      notify.send({
        message: msg
      })
    }
  })
})

/**
 * Cron 2 : NHSO TOKEN
 */
cron.schedule('*/36 * * * *', () => {
  console.log("---------------------");
  console.log("Running: " + process.env.C2_NAME);

  fetch(process.env.C2_URL)
    .then((response) => response.json())
    .then((data) => {
      if (data.token.length < 30) {
        //MoreMeng
        let notify = new LineAPI.Notify({
          token: process.env.C2_LINE_TOKEN
        })
        let msg = `💥 TOKEN มีปัญหาหรือหมดอายุ กรุณาเสียบบัตรประชาชนและ Login ตรวจสอบสิทธิ์ในโปรแรกม NHSO ให้ด้วยครับ บนเครื่อง "society25" หรือ "ict39"`
        notify.send({
          message: msg
        })
      }
    })
    .catch(function (err) {
      console.log("Unable to fetch -", err);
    });
})