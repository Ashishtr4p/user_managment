import { useEffect, useState } from 'react';
import './UserList.css';
import UserItem from '../UserItem/UserItem';
import MainNavigation from '../MainNavigation/MainNavigation';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const UserList=(props)=>{

    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [userData,setUserData] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const openModalHandler = async(data)=>{
        setShowModal(true);
        setUserData(data)
    }

    const closeModalHandler=()=>{
        setShowModal(false);
    }

    const fetchUsers = async()=>{
        setIsLoading(true);
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if(!response.ok) {
                throw new Error("Something went wrong")
            }
            const data = await response.json();
            setUsers(data);
        }catch(err){
            //
        }
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchUsers();
    },[])

    return (
        <>
            <MainNavigation />
            {showModal && <ModalOverlay userData={userData} removeModal={closeModalHandler} />}
            {isLoading && <LoadingSpinner/>}
            <ul className='users-list'>
                {users.map(user => <UserItem openModal={openModalHandler} key={user.id} id={user.id} name={user.name} email={user.email} phone={user.phone} />)}
            </ul>
        </>
    )
}

export default UserList;