import React ,{useState,useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
export default function RestaurantDetail() {

    const {id} = useParams();
    const [list, setlist] = useState({name:"",address:"",rating:"",email:""})


    useEffect(()=>{
        loading();
    },[])

    const loading= async() =>{
        const result = await axios.get(`http://localhost:3000/resturant/${id}`)
        setlist(result.data);
        console.log(result.data)
    }
    return (
        <div>
            <h1 className="heading">RestaurantDetail</h1>
            <div className="all-background-forms">
            <div className="list">
                <table>
               <tr>Name : {list.name}</tr>
               <tr>Address : {list.address}</tr>
               <tr>Rating : {list.rating}</tr>
               <tr>Email : {list.email}</tr>
            </table>

            </div>
            <Link class="btn btn-warning mr-2" to={"/list"}><ArrowBackSharpIcon/>Back</Link>
            </div>
        </div>
    )
}
