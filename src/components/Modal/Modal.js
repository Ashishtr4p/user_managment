import { useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import './Modal.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
const Modal=(props)=>{

    const [name, setName] = useState(props.userData ? props.userData.name : '');
    const [email,setEmail] = useState(props.userData ? props.userData.email : '');
    const [phone,setPhone] = useState(props.userData ? props.userData.phone : '');
    const [isLoading,setIsLoading] = useState(false);

    const nameChangeHandler=(e)=>{
        setName(e.target.value);
    }
    const emailChangeHandler=(e)=>{
        setEmail(e.target.value);
    }
    const phoneChangeHandler=(e)=>{
        setPhone(e.target.value);
    }

    const closeModalHandler=()=>{
        props.closeModal();
    }

    const submitFormHandler=async(e)=>{
        e.preventDefault();
        setIsLoading(true);
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users',{
                method:'POST',
                body:JSON.stringify({
                    name,
                    email,
                    phone
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            const data = await response.json();
        }catch(err){
            //
        }
        setIsLoading(false);
        props.closeModal();
    }

    return (
        <Card className='modal'>
            {isLoading && <LoadingSpinner asOverlay/>}
            <form onSubmit={submitFormHandler}>
                <div className='form-control'>
                    <label>Name</label>
                    <input type='text' required value={name} onChange={nameChangeHandler}></input>
                </div>

                <div className='form-control'>
                    <label>Email</label>
                    <input type='email' required value={email} onChange={emailChangeHandler}></input>
                </div>

                <div className='form-control'>
                    <label>Phone</label>
                    <input type='text' required value={phone} onChange={phoneChangeHandler}></input>
                </div>

                <div className='modal-footer'>
                    <Button onClick={closeModalHandler}>Cancel</Button>
                    <Button type='submit'>Update</Button>
                </div>
            </form>
        </Card>
    )
}

export default Modal;