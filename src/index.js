// destructure 'promises' from 'fs' object and name it 'as fs'.
import { promises as fs, promises } from "fs";

fs.readFile(__filename)
  .then((results) => {
    fs.writeFile("test.txt", results);
  })
  .then(() => {
    console.log("file written");
  })
  .catch((err) => {
    console.error(err);
  });
