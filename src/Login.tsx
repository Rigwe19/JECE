// import {createPortal} from 'react-dom'
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { IoIosLogIn } from 'react-icons/io';

type Props = {
    setLoginOpen: Function,
}

function Login({ setLoginOpen }: Props) {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })
    return (
        ReactDOM.createPortal(
            <>
                <div className="modal-container">
                    <div className={`modalContent`}>
                        <div className="header">
                            <h2>Welcome </h2>
                            <p>welcome to getting to my page, you will need login details to get access to the content behind, please provide your username and password</p>
                        </div>
                        <div className="modal-content">
                            <div className="form">
                                <label htmlFor="username">Username:</label>
                                <input value={form.username} onChange={e=>setForm(pv=>({...pv, 'username': e.target.value}))} type="text" />
                            </div>
                            <div className="form">
                                <label htmlFor="password">Password:</label>
                                <input value={form.password} onChange={e=>setForm(pv=>({...pv, 'password': e.target.value}))} type="password" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => {
                                if (form.username === 'jece_admin' && form.password === '1234567890') {
                                    setLoginOpen(false);
                                    alert(JSON.stringify(form, null, 2))
                                }else{
                                    alert(JSON.stringify(form, null, 2))
                                }
                            }
                            } style={{ display: "flex", alignItems: "center" }}>
                                <IoIosLogIn style={{ marginRight: '5px' }} />
                                Login
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`backdrop blur`}></div>
            </>,
            document.getElementById("modal") as HTMLElement
        )

    )
}

export default Login