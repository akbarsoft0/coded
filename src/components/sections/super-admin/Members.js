import React from 'react'
import data from '../../../assets/data/members.json'
import './super-admin.css'
const Members = () => {
    let Admin = data[1].list
    let Lerners = data[2].list
    return (
        <>
            {/* admins */}
            <table className='table table-dark table-striped table-bordered table-hover my-5'>
                <thead>
                    <tr id='th-head'>
                        <th >admin</th>
                    </tr>
                    <tr>
                        <th>#</th>
                        <th>email</th>
                        <th>name</th>
                    </tr>
                </thead>
                {Admin.map((e, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{index}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>

            {/* lerners */}
            <table className='table table-dark table-striped table-bordered table-hover my-5'>
                <thead>
                    <tr id='th-head'>
                        <th >lerners</th>
                    </tr>
                    <tr>
                        <th>#</th>
                        <th>email</th>
                        <th>name</th>
                    </tr>
                </thead>
                {Lerners.map((e, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{index}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </>
    )
}

export default Members