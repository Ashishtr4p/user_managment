import './ModalOverlay.css';
import Modal from '../Modal/Modal';
import Backdrop from '../Backdrop/Backdrop';

const ModalOverlay=(props)=>{
    const removeBackdropHandler=()=>{
      props.removeModal();
    }

    return (
        <>
          <Modal userData={props.userData} closeModal={removeBackdropHandler}/>
          <Backdrop onClick={removeBackdropHandler}/>
        </>
    )
}

export default ModalOverlay;