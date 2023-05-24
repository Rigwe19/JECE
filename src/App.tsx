import { Children, useEffect, useState } from 'react';
import { IoIosPerson, IoIosCall, IoIosHome, IoIosGlobe, IoIosPin, IoIosCheckmarkCircleOutline, IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import './App.css'
import { CSSTransition } from 'react-transition-group';
import { countryListAlpha2 } from './assets/countries';
import Modal from './Modal';

interface Form {
  name: string;
  location: string;
  phone: string;
  address: string;
  country: string;
}

function App() {
  const [step, setStep] = useState<number>(1);
  const [checked, setChecked] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<Form>({
    name: '',
    location: '',
    phone: '',
    address: '',
    country: '',
  });

  /**
   * react useEffect hook is used to add the dark class to the
   * body of the document when the switch is toggled.
   */
  useEffect(() => {
    if (checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark')
    }
  }, [checked])

  /**
   * this function takes a number and set the steo state
   * to that number which in turn hides over pages leaving only
   * the page visible.
   * @param page the page number to navigate to
   */
  const navigate = (page: number) => {
    setStep(page);
  }

  /**
   * this function set the form state with the params 
   * provided by
   * @param name the name of the input
   * @param value the value of the input
   */
  const handleChange = (name: string, value: string) => {
    setForm(pv => ({ ...pv, [name]: value }));
  }
  /**
   * an object that holds the header information
   */
  const subheader = [{
    h3: 'Your Name',
    p: 'First, middle & Last name',
    icon: <IoIosPerson className="icon" onClick={() => navigate(1)} />
  }, {
    h3: 'City',
    p: 'Loaction',
    icon: <IoIosPin className="icon" onClick={() => navigate(2)} />
  }, {
    h3: 'Telephone',
    p: 'Number',
    icon: <IoIosCall className="icon" onClick={() => navigate(3)} />
  }, {
    h3: 'House',
    p: 'Address',
    icon: <IoIosHome className="icon" onClick={() => navigate(4)} />
  }, {
    h3: 'Country Of',
    p: 'Residence',
    icon: <IoIosGlobe className="icon" onClick={() => navigate(5)} />
  }];
  /**
   * the render function.
   */
  return (
    <>
      <div className="container">
        <div className="header top">
          <div>
            <h1>My Skill Level</h1>
            <span>Answer the following questions to begin your plan</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="switch">
              <input type="checkbox" onChange={e => setChecked(e.target.checked)} />
              <div className="slider"></div>
            </label>
            <span className="toggle_label">Dark Mode</span>
          </div>

        </div>
        <div className="body">
          <div className="left_side">
            <div className="left_header">
              {Children.toArray(subheader.map(value => (<div className="subheader">
                <h3>{value.h3}</h3>
                <p>{value.p}</p>
              </div>)))}
            </div>
            <div className="steps">
              <ul>
                {Children.toArray(subheader.map((value, index) => (
                  <li className={`${step >= index + 1 && 'active'}`}>
                    {/* <IoIosPerson className="icon" onClick={() => navigate(1)} /> */}
                    {value.icon}
                    <div className="ball"></div>
                  </li>)))}
              </ul>
            </div>
          </div>
          <div className="right_side">
            {step === 1 && <fieldset className='active_form' id="form_name">
              <div className="header">
                <p>Step 1/5</p>
                <h2>Lets start with your name</h2>
                <p>please fill the details below</p>
              </div>
              <div className="input_field">
                <label htmlFor="name">Enter your Name</label>
                <input type="text" name="name" id="name" value={form.name} onChange={e => handleChange(e.target.name, e.target.value)} />

                <div className="buttons">
                  <button type='button' onClick={() => navigate(2)} className="next_btn">
                    Next
                    <IoIosArrowRoundForward />
                  </button>
                </div>

              </div>
            </fieldset>}
            {step === 2 && <fieldset id="form_city">
              <div className="header">
                <p>Step 2/5</p>
                <h2>Now we need your location</h2>
                <p>please fill the details below</p>
              </div>
              <div className="input_field">
                <label htmlFor="location">Enter your Location</label>
                <input type="text" name="location" id="location" value={form.location} onChange={e => handleChange(e.target.name, e.target.value)} />

                <div className="buttons">
                  <button type='button' onClick={() => navigate(1)} className="prev_btn">
                    <IoIosArrowRoundBack />
                    Previous
                  </button>
                  <button type='button' onClick={() => navigate(3)} className="next_btn">
                    Next
                    <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
            </fieldset>}
            {step === 3 && <fieldset id="form_phone">
              <div className="header">
                <p>Step 3/5</p>
                <h2>Ok, Just need your phone number</h2>
                <p>please fill the details below</p>
              </div>
              <div className="input_field">
                <label htmlFor="phone">Enter your Phone Number</label>
                <input type="text" name="phone" id="phone" value={form.phone} onChange={e => handleChange(e.target.name, e.target.value)} />

                <div className="buttons">
                  <button type='button' onClick={() => navigate(2)} className="prev_btn">
                    <IoIosArrowRoundBack />
                    Previous
                  </button>
                  <button type='button' onClick={() => navigate(4)} className="next_btn">
                    Next
                    <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
            </fieldset>}
            {step === 4 && <fieldset id="form_address">
              <div className="header">
                <p>Step 4/5</p>
                <h2>We need your house address</h2>
                <p>please fill the details below</p>
              </div>
              <div className="input_field">
                <label htmlFor="address">Enter your Address</label>
                <input type="text" name="address" id="address" value={form.address} onChange={e => handleChange(e.target.name, e.target.value)} />

                <div className="buttons">
                  <button type='button' onClick={() => navigate(3)} className="prev_btn">
                    <IoIosArrowRoundBack />
                    Previous
                  </button>
                  <button type='button' onClick={() => navigate(5)} className="next_btn">
                    Next
                    <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
            </fieldset>}
            {step === 5 && <fieldset id="form_country">
              <div className="header">
                <p>Step 5/5</p>
                <h2>We need your country of residence</h2>
                <p>please select the details below</p>
              </div>
              <div className="input_field">
                <label htmlFor="country">Select your Country</label>
                <div className="custom-select">
                  <select name="country" id="country" value={form.country} onChange={e => handleChange(e.target.name, e.target.value)}>
                    <option value="">Select Country</option>
                    {Children.toArray(Object.entries(countryListAlpha2).map(value => (<option value={value[0]}>{value[1]}</option>)))}
                  </select>
                </div>


                <div className="buttons">
                  <button type='button' onClick={() => navigate(4)} className="prev_btn">
                    <IoIosArrowRoundBack />
                    Previous
                  </button>
                  <button type='button' className="finish_btn" onClick={() => setModalOpen(true)}>
                    <IoIosCheckmarkCircleOutline />
                    Finish
                  </button>
                </div>
              </div>
            </fieldset>}
          </div>
        </div>
        {/* <pre style={{color: 'black'}}>{JSON.stringify(form, null, 2)}</pre> */}
      </div>
      <CSSTransition in={modalOpen} unmountOnExit timeout={200} classNames='alert'>
        <Modal setModalOpen={setModalOpen} form={form} ></Modal>
      </CSSTransition>
    </>
  )
}

export default App
