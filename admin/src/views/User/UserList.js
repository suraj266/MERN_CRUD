import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { userList } from '../../components/utility/context';
import { MdDelete } from "react-icons/md";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function UserList() {

    const [user, setUser] = useState([]);
    const [, setStatus] = useState('')
    console.log(user);
    useEffect(() => {
        handleUsers();
    }, [])

    const handleUsers = async () => {
        const { data } = await userList();
        setUser(data);
    }

    return (
        <Table striped bordered hover className='m-2 mt-5' style={{ width: '98.7%' }}>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th className='text-center'>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td className='col-1 text-center'><img src={row.image} alt="Selected" className='rounded-circle' style={{ width: "3em", height: "3em", }} /></td>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>{row.contact}</td>
                                <td>{row.gender}</td>
                                <td>
                                    <Form.Select style={{ color: 'green', backgroundColor: 'FFFFFF' }} value={row.status} onChange={(e) => setStatus(e.target.value)} aria-label="Default select example">
                                        <option value="active">active</option>
                                        <option value="inactive">inactive</option>
                                        <option value="deleted">deleted</option>
                                    </Form.Select>
                                </td >
                                <td>
                                    <Button size='sm' variant="outline-danger">
                                        <MdDelete size={20} />
                                    </Button>{' '}
                                </td>

                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    );
}

export default UserList;