// import {createPortal} from 'react-dom'
import ReactDOM from 'react-dom';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { countryListAlpha2 } from './assets/countries';

type Props = {
    setModalOpen: Function,
    form: {
        name: string,
        location: string,
        phone: string,
        address: string,
        country: any
    }
}

function Modal({ setModalOpen, form }: Props) {
    return (
        ReactDOM.createPortal(
            <>
                <div className="modal-container" onClick={() => setModalOpen(false)}>
                    <div className={`modalContent`}>
                        <div className="header">
                            <h2>Congratulations </h2>
                            <p>you have successfully completed all the steps, now you just have to click on the okay button and you are done.</p>
                        </div>
                        <div className="modal-content">
                            <p>These are your inputted values</p>
                            <div className='result'>
                                <span>Name: {form.name}</span>
                                <span>Location: {form.location}</span>
                                <span>Phone Number: {form.phone}</span>
                                <span>Home Address: {form.address}</span>
                                <span>Country: {countryListAlpha2[form.country]}</span>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => setModalOpen(false)}>
                                <IoIosCheckmarkCircleOutline />
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`backdrop`}></div>
            </>,
            document.getElementById("modal") as HTMLElement
        )

    )
}

export default Modal