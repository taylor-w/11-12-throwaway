// this only works because of webpack
// normally, node only uses required
// i.e.) const fs = require('fs')
import fs from "fs";

// example of a settimeout
setTimeout(() => {
  console.log("howdy partner");
}, 5000);

fs.readFile(__filename, "utf8", (err, results) => {
  if (err) {
    console.error(err);
  } else {
    console.log(results);
  }
});
