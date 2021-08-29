import express from 'express'
const app = express();
import mysql from 'mysql2'
import bodyParser from 'body-parser';  // POST 요청값을 body에서 추출하기 위해 씀ㅇㅇ
import { urlencoded } from 'body-parser';
import React from 'react'

const db = mysql.createPool({
    host: 'testest2.cf',
    port: 3306,
    user: 'tester',
    password: '1',
    database: 'node_1'
});


const list = () => {
    return (
        <div>
            
        </div>
    )
}

export default list
