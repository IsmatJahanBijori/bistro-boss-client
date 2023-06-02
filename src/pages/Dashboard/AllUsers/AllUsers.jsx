import { useQuery } from '@tanstack/react-query';
import { Result } from 'postcss';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';

const AllUsers = () => {
    const {data: users=[], refetch}=useQuery(['users'], async()=>{
        const res=await fetch('http://localhost:5000/users')
        return res.json()
    })

    const handleDelete=user=>{

    }
    const handleMakeAdmin=id=>{

    }
    return (
        <section className="w-full">
            <Helmet>
                <title>All Users</title>
            </Helmet>
            <SectionTitle
                subHeading={"How Many"}
                heading={"Manage All users"}
            ></SectionTitle>
            <div className="flex flex-row justify-evenly my-10">
                <p className="text-2xl">Total Order: {users.length}</p>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role ==='admin' ?'admin':<button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-ghost btn-lg">
                                        <FaUsers />
                                    </button>}
                                </td>
                                <td>
                                    <button onClick={()=>handleDelete(user)} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllUsers;