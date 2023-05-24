// import {createPortal} from 'react-dom'
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { IoIosCloseCircleOutline, IoIosLogIn } from 'react-icons/io';

type Props = {
    setLoginOpen: Function,
}

function Login({ setLoginOpen }: Props) {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const [check, setCheck] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState(false);
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
                                <div className="relative">
                                    <input className={`${error && check.username !== 'jece_admin' ? 'red' : ''}`} value={form.username} onChange={e => setForm(pv => ({ ...pv, 'username': e.target.value }))} type="text" />
                                    {error && check.username !== 'jece_admin' && <IoIosCloseCircleOutline className="icon-close" />}
                                </div>

                            </div>
                            <div className="form">
                                <label htmlFor="password">Password:</label>
                                <div className="relative">
                                    <input className={`${error && check.password !== '12345678' ? 'red' : ''}`} value={form.password} onChange={e => setForm(pv => ({ ...pv, 'password': e.target.value }))} type="password" />
                                    {error && check.password !== '12345678' && <IoIosCloseCircleOutline className="icon-close" />}
                                </div>

                            </div>
                            <div className='form' style={{ margin: '0 10px' }}>
                                {error && <>
                                    <p style={{ fontSize: '12px', color: '#f00' }}>wrong username or password check your username and try again</p>
                                    <pre>Hint: username: jece_admin <br />
                                        password: 12345678
                                    </pre>
                                </>}
                            </div>


                        </div>
                        <div className="modal-footer">
                            <button onClick={() => {
                                if (form.username === 'jece_admin' && form.password === '12345678') {
                                    setLoginOpen(false);
                                } else {
                                    setError(true);
                                    setCheck({...form});
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