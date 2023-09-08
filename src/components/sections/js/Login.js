import React, { useState } from 'react'
import '../css/login.css'
import data from '../../../assets/data/members.json'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom';
import MuiSnack from '../../mui/MuiSnack';


export default function Login() {
    let login = useNavigate()
    const [open, setOpen] = useState(false)

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [passType, setPassType] = useState('password')

    //match login data
    const superAdmin = data[0].list;
    const SAdmin = superAdmin.find(
        (e) => (e.name === user) && (e.password === pass)
    );

    const admin = data[1].list;
    const Admin = admin.find(
        (e) => e.name === user && e.password === pass
    );

    const lerner = data[2].list;
    const Lerner = lerner.find(
        (e) => e.name === user && e.password === pass
    );

    //render after maching condition
    function show(event) {
        event.preventDefault();
        if (user && pass) {
            if (Lerner) {
                login('/lerner')
            } else if (SAdmin) {
                login('/super-admin')
            } else if (Admin) {
                login('/admin', { state: { Admin } })
            } else {
                setOpen(true);
                login('/register')
            }
        }
        else {
            setOpen(true);
        }
    }

    // password visibility
    function showPass() {
        if (passType === 'password') {
            setPassType('text')
        }
        else {
            setPassType('password')
        }

    }


    return (
        <section className='login' id='login'>
            <MuiSnack
                open={open}
                setOpen={setOpen}
                severity={"error"}
                text={"Please enter a valid login name and password."}
            />

            <form onSubmit={show}>
                <h3>login page</h3>
                <input type="text" value={user} placeholder='input user name' onChange={(e) => setUser(e.target.value)} />
                <div className="passbox">
                    <input type={passType} name="pass" id="pass" placeholder='input password' value={pass} onChange={(e) => setPass(e.target.value)} />
                    <input type="checkbox" name="passEye" id="passEye" onChange={showPass} />
                </div>

                <NavLink to={'/'}>
                    <Button
                        variant="contained"
                        className='m-2'
                        color="error"
                        size="large"
                    >
                        close
                    </Button>
                </NavLink>

                <Button type='submit'
                    variant="contained"
                    className='my-2'
                    color="secondary"
                    size="large"
                >
                    login
                </Button>

                <br />
                <NavLink to={'/register'} className='text-danger'>register</NavLink>

            </form>
        </section >
    )
}




