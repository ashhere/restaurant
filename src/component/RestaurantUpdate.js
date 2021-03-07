import userEvent from '@testing-library/user-event'
import React , {useState , useEffect} from 'react';
import axios from "axios";
import {useHistory , useParams} from "react-router-dom";

export default function RestaurantUpdate() {

    let history = useHistory();
    const {id} = useParams();
    

    const [info , setInfo] = useState({
        name: "",
        address:"",
        rating:"",
        email:""
    })

    const onInputChange = (e) =>{
        setInfo({...info,[e.target.name]:e.target.value})
    }

    const create = async(e) =>{
      e.preventDefault();

      await axios.put(`http://localhost:3000/resturant/${id}`,info)
            history.push("/list")
           
    }

        useEffect(() => {
          loadUser()
            
        },[]);

    const loadUser = async() =>{
        const result = await  axios.get(`http://localhost:3000/resturant/${id}`);
        console.log(result);
        setInfo(result.data);
    
    }
    return (
        <>
        <h1 className="heading">RestaurantEdit</h1>
        <div className="all-background-forms">
        <div className="forms">



            <input type="text" placeholder="Enter Restaurant Name" name = "name" value={info.name} onChange={e=>onInputChange(e)} /> <br />
            <input type="text" placeholder="Address"  name = "address" value={info.address} onChange={e=>onInputChange(e)} /> <br />
            <input type="text" placeholder=" Rating out of 5 "name = "rating" value={info.rating} onChange={e=>onInputChange(e)}  /> <br />
            <input type="email" placeholder=" Email" name = "email" value={info.email} onChange={e=>onInputChange(e)} /> <br />
            <button class="btn btn-primary"onClick={(e) => create(e)}>Submit</button>
         </div>   
         </div>
        </> 
    )
}

