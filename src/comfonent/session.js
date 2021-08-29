const Session = require('express-session');
const express = require('express');
const MysqlStore = require('express-mysql-session')(session);
const dbconf = {
    host: 'testest2.cf',
    port: 3306,
    user: 'tester',
    password: '1',
    database: 'node_1'
}
const app = express();
app.use(session({  
    secret: 'keyboard cat',  // 암호화
    resave: false,
    saveUninitialized: true,
    store: sessionStore
}));
app.get('/', (req, res, next) => {  // 3
    console.log(req.session);
    if (!req.session.num) {
        req.session.num = 1;
    } else {
        req.session.num = req.session.num + 1;
    }
    res.send(`Number : ${req.session.num}`);
});
app.listen(3000, () => {
    console.log('listening 3000port');
});
app.get('/login', function (req, rsp) {
    var post = req.body;
    db.query('select userid from users where userid=? and passwd=?',
        [userid, passwd], function (err, result) {
            if (err) throw err;
            if (result[0] !== undefined) {
                req.session.uid = result[0].id;
                req.session.author_id = result[0].author_id;
                req.session.isLogined = true;
                //세션 스토어가 이루어진 후 redirect를 해야함.
                req.session.save(function () {
                    rsp.redirect('/');
                });
            }
        });
});