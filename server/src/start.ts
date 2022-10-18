import express, {Application} from "express";
import path from "path";
import https from "https";
import fs from "fs";
import cors from "cors";
//cookies
import cookieParser from "cookie-parser";

//: Application
const app = express();

const port = process.env.PORT || 8080;

const router = express.Router();

const options = {
    key: fs.readFileSync("./cert/localhost-key.pem"),
    cert: fs.readFileSync("./cert/localhost.pem"),
}


//middlewares
if(!(process.env.NODE_ENV === "production")){
    app.use(cors({credentials:true, origin: "https://localhost:8080"}));
}

app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../dist")));

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("Hello, just parring by!");
    next();
});

//Authentication middleware
app.use("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if(!auth){
        res.status(403).send
    }
    //req.headers. can access the authoriation token wia headers
    next();
});

app.get("/", (req: express.Request, res: express.Response) =>{
    const htmlFile = path.join(__dirname, "../../dist/index.html");

    res.status(200).cookie(`My cookie`, "Some encrypted cookie value", {
        //maxAge: 5000,
        expires: new Date("2022-10-01"),
        secure: true,
        httpOnly: true,
        sameSite: "lax",
    }).send(htmlFile);
})

//Routes
router.get("/api/getsomedata",(req: express.Request, res: express.Response) => {
    console.log("Im in the get stuff route");
    setTimeout(()=>{
        res.status(200).send({someData:"All good"});
    }, 1000);
});

//Sensitive data:
//router.post()

//Add data:
//router.put()

//delete data:
//router.delete()

const server = https.createServer(options, app);

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})