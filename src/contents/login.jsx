import React, { useState } from 'react'
import '../res/login.css'

const Login = () => {

    const [Userid, setUserid] = useState("")
    const [Passwd, setPasswd] = useState("")

    const onIdhandler = (event) => {
        
        setUserid(event.currentTarget.value)
    }
    const onPasshandler = (event) => {

        setPasswd(event.currentTarget.value)
    }
    

    return (
<div className="qqq">
            <ul className="boxbg">
                <li className="boxbg1 boxbgs"></li>
                <li className="boxbg2 boxbgs"></li>
                <li className="boxbg3 boxbgs"></li>
                <li className="boxbg4 boxbgs"></li>
            </ul>
            
        <div className="mainbg">
<div className="box">
                <div className="loginbox wrapbox">
                    <form>
                        <input type="text" name="userid" id="userid" placeholder="아이디를 입력하세요" value={Userid} onChange={onIdhandler} /><br />
                        <input type="password" name="passwd" id="passwd" placeholder="비밀번호를 입력하세요" value={Passwd} onChange={onPasshandler} /><br />
                        <br />
                        <button id="btn">회원가입</button><br />
                        <button id="btn">로그인</button>
                    </form>
                </div>


                {/* <div className="joinbox wrapbox">
                    <form>
                        <input type="text" name="userid" id="userid" placeholder="아이디를 입력하세요" value={Userid} onChange={onIdhandler} /><br />
                        <input type="password" name="passwd" id="passwd" placeholder="비밀번호를 입력하세요" value={Passwd} onChange={onPasshandler} />
                        <br />
                        <button id="btn">회원가입</button><br />
                        <button id="btn">로그인</button>
                    </form>
                </div> */}


            </div>
            </div>
        </div>
    )
}

export default Login

