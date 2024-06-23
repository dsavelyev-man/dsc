import { Express } from "express";

export default async (app: Express) => {
  let files = {
    js: "/core/admin/app.js",
    css: "/core/admin/css/style.css",
  };

  const template = `
    <!doctype html>
    <html lang="en" class="dark">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DS Admin</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
        <link href="${files.css}" rel="stylesheet">
      </head>
      <body style="overflow: hidden">
        <div id="root"></div>
        <script type="module" src="${files.js}"></script>
      </body>
    </html>
`;

  app.use("/core/admin/**", (req, res) => {
    res.send(template);
  });

  app.use("/core/admin", (req, res) => {
    res.send(template);
  });
};
