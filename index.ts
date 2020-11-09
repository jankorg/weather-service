import express from "express";
import path from "path";
import {ServerClass} from "./server/index";
const router = express.Router();

const app = express();
const port = 3002 || process.env.PORT;

const bundler = express.static(path.join(__dirname, "../weather-app/build"));
const getContent = new ServerClass();
app.use(bundler);
app.all('*/api/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
   });
app.get('/api/getContent', getContent.getHeader);
app.get('/api/getMenu', getContent.getMenu);
app.get('/api/getFooter', getContent.getFooter);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});