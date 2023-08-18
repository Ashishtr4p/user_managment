import { useState } from 'react';
import Button from '../Button/Button';
import './MainNavigation.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';

const MainNavigation=()=>{
    const [showModal, setShowModal] = useState(false);

    const openModalHandler=()=>{
        setShowModal(true);
    }

    const closeModalHandler=()=>{
        setShowModal(false);
    }

    return (
        <>
          {showModal && <ModalOverlay removeModal={closeModalHandler}/>}
          <nav className='header'>
            <h1>Users Management System</h1>
            <Button danger onClick={openModalHandler}>Add New User?</Button>
          </nav>
        </>
    )
}

export default MainNavigation;