/*
    CIT 281 Project 3
    Name: Zoe Turnbull
*/

/* VARIABLES & IMPORTS */
const fastify = require("fastify")();
const fs = require("fs");
const coinCount = require("./p3-module");

/* REQUESTS */

fastify.get("/", (request, reply) => {
  reply.code(200).header("Content-Type", "text/html; charset=utf-8");
  fs.readFile(`${__dirname}/index.html`, (err, data) => {
    if (err) {
      console.log(err);
      reply.code = 500;
      reply.header("Content-Type", "text/html; charset=utf-8");
      reply.send("Error processing request");
    } else {
      reply.code = 200;
      console.log("URL: ", request.url);
      reply.header("Content-Type", "text/html; charset=utf-8");
      reply.send(data);
    }
  });
});

fastify.get("/coin", (request, reply) => {
  let { denom = 0, count = 0 } = request.query;
  console.log(denom, count);
  let coinValue = coinCount.coinCount({
    denom: parseInt(denom),
    count: parseInt(count),
  });
  console.log(coinValue);
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(
      `<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`
    );
});

fastify.get("/coins", (request, reply) => {
  let { option } = request.query;
  switch (option) {
    case "1":
      coinValue = coinCount.coinCount(
        { denom: 5, count: 3 },
        { denom: 10, count: 2 }
      );
      break;
    case "2":
      coinValue = coinCount(...coins);
      break;
    case "3":
      coinValue = coinCount(coins);
      break;
    default:
      coinValue = 0;
      console.log("pie");
  }
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(
      `<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`
    );
});

/* START SERVER, LISTEN TO REQUESTS */
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
