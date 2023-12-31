import React, { useState } from 'react'
import '../css/login.css'
import data from '../../../assets/data/members.json'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom';
import MuiSnack from '../../mui/MuiSnack';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


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
            <div className="container">
                <div className="row justify-bitween">
                    <div className="col-lg-8">
                        <form onSubmit={show}>
                            <h3>login page</h3>
                            <input type="text" value={user} placeholder='input user name' onChange={(e) => setUser(e.target.value)} />
                            <div className="passbox">
                                <input type={passType} name="pass" id="pass" placeholder='input password' value={pass} onChange={(e) => setPass(e.target.value)} />
                                <RemoveRedEyeIcon onClick={showPass} id="passEye" />
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
                    </div>
                    <div className="col-lg-4">
                        <div className='side'>
                            <h4>pages</h4>
                            <table>

                                <tr>
                                    <th>pages</th>
                                    <th>username</th>
                                    <th>password</th>
                                </tr>
                                <tr>
                                    <th>Super admin</th>
                                    <td>akbar</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <th>Admin</th>
                                    <td>a</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <th>Lerner</th>
                                    <td>c</td>
                                    <td>3</td>
                                </tr>

                            </table>
                        </div>
                    </div>
                </div>
            </div>



        </section >
    )
}




