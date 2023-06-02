import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const {signInWithGoogle}=useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGoogle=()=>{
        signInWithGoogle()
        .then(result=>{
            // console.log(result.user)
            const loggedUser=result.user;
            console.log(loggedUser)
            const saveUser={
                name: loggedUser.displayName,
                email: loggedUser.email
              }
              fetch('http://localhost:5000/users',
              {
                method: 'POST',
                headers:{
                  'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
              }).then(res=>res.json()).then(data=>{
                console.log(data)
                if(data.insertedId){
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate(from, { replace: true });
                }
              })
            // navigate(from, { replace: true });
        }).catch(err=>console.log(err))
    }
    return (
        <div className='text-center my-3'>
        <button onClick={handleGoogle} className="btn btn-square btn-outline">G</button>
        </div>
    );
};

export default SocialLogin;