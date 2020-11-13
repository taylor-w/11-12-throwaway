import https from "https";

setInterval(() => {
  const req = https.request(
    {
      hostname: "google.com",
      port: 443,
      method: "GET",
      path: "/",
    },
    (res) => {
      console.log(res.statusCode);
      res.on("data", (data) => {
        console.log(data);
      });

      res.on("error", (error) => {
        console.error(error);
      });
    }
  );

  req.end();
}, 2000);
