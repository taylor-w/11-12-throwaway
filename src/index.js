import https from "https";

const interval = setInterval(() => {
  console.log("howdy partner");
}, 200);

setTimeout(() => {
  clearInterval(interval);
}, 2000);
