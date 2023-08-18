import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import './UserItem.css'
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const UserItem = (props) => {
    const [isLoading,setIsLoading]=useState(false);

    const openModalHandler=async()=>{
        let data;
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`);
            if(!response.ok){
                throw new Error("Something went wrong while fetching user details");
            }
            data = await response.json();
        }catch(err){
            //
        }
        props.openModal(data);
    }

    const deleteUserHandler=async()=>{
        setIsLoading(true);
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`,{method:'DELETE'});
            if(!response.ok()) throw new Error("Something went wrong while deleting the user!");
        }catch(err){
            //
        }
        setIsLoading(false);
    }

    return (
        <>
        {isLoading && <LoadingSpinner asOverlay/>}
        <li className="user-item">
            <Card className="user-item__content">
                <div className="user-item__image">
                    <img height='140px' width='140px' src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' />
                </div>
                <div className="user-item_info">
                    <h2>{props.name}</h2>
                    <h3>{props.email}</h3>
                    <h3>{props.phone}</h3>
                </div>
                <div>
                    <Button onClick={openModalHandler}>Edit?</Button>
                    <Button danger onClick={deleteUserHandler}>Delete?</Button>
                </div>
            </Card>
        </li>
        </>
        
    )
}

export default UserItem;