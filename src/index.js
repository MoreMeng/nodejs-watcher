'use strict';

const isReachable = require('is-reachable');
const cron = require('node-cron');
const LineAPI = require('line-api');

require('dotenv').config();

/**
 * Cron 30 minute :
 * C1 = ATH8 API HOMC
 * C2 = ATH8 API HOSxPXE
 * C3 = ATH8 API HOSxPXE Inventory
 */
cron.schedule('*/30 * * * *', () => {
  console.log("---------------------");
  console.log("30 minute:");

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

  isReachable(process.env.C2_URL).then(reachable => {
    let d = new Date(Date.now()).toLocaleString();
    console.log(`[${d}] ${process.env.C2_NAME}:  ✔ ${reachable}`);

    if (!reachable) {
      let notify = new LineAPI.Notify({
        token: process.env.C2_LINE_TOKEN
      })
      //   let msg = `[${d}] NodeJS: 💥 ${reachable}`
      let msg = `${process.env.C2_NAME} : 💥 ไม่ตอบสนอง`
      notify.send({
        message: msg
      })
    }
  })

  isReachable(process.env.C3_URL).then(reachable => {
    let d = new Date(Date.now()).toLocaleString();
    console.log(`[${d}] ${process.env.C3_NAME}:  ✔ ${reachable}`);

    if (!reachable) {
      let notify = new LineAPI.Notify({
        token: process.env.C3_LINE_TOKEN
      })
      //   let msg = `[${d}] NodeJS: 💥 ${reachable}`
      let msg = `${process.env.C3_NAME} : 💥 ไม่ตอบสนอง`
      notify.send({
        message: msg
      })
    }
  })
})

/**
 * Cron 2 : NHSO TOKEN
 */
// cron.schedule('*/36 * * * *', () => {
//   console.log("---------------------");
//   console.log("Running: " + process.env.C2_NAME);

//   fetch(process.env.C2_URL)
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.token.length < 30) {
//         //MoreMeng
//         let notify = new LineAPI.Notify({
//           token: process.env.C2_LINE_TOKEN
//         })
//         let msg = `💥 TOKEN มีปัญหาหรือหมดอายุ กรุณาเสียบบัตรประชาชนและ Login ตรวจสอบสิทธิ์ในโปรแรกม NHSO ให้ด้วยครับ บนเครื่อง "society25" หรือ "ict39"`
//         notify.send({
//           message: msg
//         })
//       }
//     })
//     .catch(function (err) {
//       console.log("Unable to fetch -", err);
//     });
// })


/**
 * Cron 10 minute :
 * C5 = ATH25 Queue Gateway 21001
 * C6 = ATH25 Queue Gateway 21002
 * C7 = ICT94 KIOSK Gateway
 * C8 = ATH9 Inventory Gateway
 */
cron.schedule('*/10 * * * *', () => {
  console.log("---------------------");
  console.log("10 minute:");

  isReachable(process.env.C5_URL).then(reachable => {
    let d = new Date(Date.now()).toLocaleString();
    console.log(`[${d}] ${process.env.C5_NAME}:  ✔ ${reachable}`);

    if (!reachable) {
      let notify = new LineAPI.Notify({
        token: process.env.C5_LINE_TOKEN
      })
      //   let msg = `[${d}] NodeJS: 💥 ${reachable}`
      let msg = `${process.env.C5_NAME} : 💥 ไม่ตอบสนอง`
      notify.send({
        message: msg
      })
    }
  })

  isReachable(process.env.C6_URL).then(reachable => {
    let d = new Date(Date.now()).toLocaleString();
    console.log(`[${d}] ${process.env.C6_NAME}:  ✔ ${reachable}`);

    if (!reachable) {
      let notify = new LineAPI.Notify({
        token: process.env.C6_LINE_TOKEN
      })
      //   let msg = `[${d}] NodeJS: 💥 ${reachable}`
      let msg = `${process.env.C6_NAME} : 💥 ไม่ตอบสนอง`
      notify.send({
        message: msg
      })
    }
  })

  isReachable(process.env.C7_URL).then(reachable => {
    let d = new Date(Date.now()).toLocaleString();
    console.log(`[${d}] ${process.env.C7_NAME}:  ✔ ${reachable}`);

    if (!reachable) {
      let notify = new LineAPI.Notify({
        token: process.env.C7_LINE_TOKEN
      })
      //   let msg = `[${d}] NodeJS: 💥 ${reachable}`
      let msg = `${process.env.C7_NAME} : 💥 ไม่ตอบสนอง`
      notify.send({
        message: msg
      })
    }
  })

  isReachable(process.env.C8_URL).then(reachable => {
    let d = new Date(Date.now()).toLocaleString();
    console.log(`[${d}] ${process.env.C8_NAME}:  ✔ ${reachable}`);

    if (!reachable) {
      let notify = new LineAPI.Notify({
        token: process.env.C8_LINE_TOKEN
      })
      //   let msg = `[${d}] NodeJS: 💥 ${reachable}`
      let msg = `${process.env.C8_NAME} : 💥 ไม่ตอบสนอง`
      notify.send({
        message: msg
      })
    }
  })
})