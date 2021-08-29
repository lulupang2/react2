const { MongoClient } = require('mongodb');
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'
import express, { Router } from 'express'
import { Router } from 'express';
const router = new Router();
const app = express();
//const { PORT, MONGO_URI } = process.env; 포트,URI를 환경변수에서 가져다 씀

//몽구스 셋팅
const uri = "mongodb+srv://admin:1@cluster0.ri5pg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.
    connect(uri,
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        console.log('디비 접속 SUCESS!!');
    })
    .catch((e) => {
        console.log(e);
    });

        
