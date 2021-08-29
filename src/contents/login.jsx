import React from 'react'
import '../res/login.css'

const login = () => {
    return (
        <div className="main">
            <div className="box">

                <form>
                    <input type="text" name="userid" id="userid" placeholder="아이디를 입력하세요" />
                    <input type="password" name="passwd" id="passwd" placeholder="비밀번호를 입력하세요" />
                    <br />
                    <button id="btn">회원가입</button>
                    <button id="btn">로그인</button>
                </form>

            </div>
        </div>
    )
}

export default login

