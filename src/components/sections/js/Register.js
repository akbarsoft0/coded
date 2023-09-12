import React, { useState } from 'react'
import '../css/login.css'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom';
import MuiSnack from '../../mui/MuiSnack';



export default function Register() {

    let login = useNavigate()

    const [open, setOpen] = useState(false)

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [tnc, setTnc] = useState(false);
    const [passType, setPassType] = useState('password')


    function Show(event) {
        event.preventDefault();
        if (user && email && pass && tnc) {
            login('/lerner')
        } else {
            // alert('please input user & password & accsept t&c!')
            setOpen(true);

        }
    }

    // password visibility
    function showPass() {
        if (passType === 'password') {
            setPassType('text')
        }
        else {
            // setPassType('password')
        }
    }

    return (
        <section className='login' id='register'>
            <MuiSnack open={open} setOpen={setOpen} text={"Please Register valid name password and Email"} severity={'error'} />

            <form onSubmit={Show}>
                <h3>register page</h3>

                <input type="text" value={user} placeholder='input user name' onChange={(e) => setUser(e.target.value)} />

                <input type="email" value={email} placeholder='abc@gmail.com' onChange={(e) => setEmail(e.target.value)} />

                <div className="passbox">
                    <input type={passType} name="pass" id="pass" placeholder='input password' value={pass} onChange={(e) => setPass(e.target.value)} />
                    <input type="checkbox" name="passEye" id="passEye" onChange={showPass} />
                </div>
                <input type="checkbox" name="check" id="check" checked={tnc} onChange={() => setTnc(true)} />
                <label htmlFor="check">term & conditons</label>
                <br />
                <NavLink to={'/'}>
                    <Button variant="contained" className='m-2' color="error" size="large">close</Button>
                </NavLink>
                <Button type='submit' variant="contained" className='my-2' color="secondary" size="large">register</Button>
                <br />
                <NavLink to={'/login'} className='text-danger'>login</NavLink>

            </form>
        </section>
    )
}

