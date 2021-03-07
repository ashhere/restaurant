import React, { Component } from "react";


class RestaurantCreate extends Component {


    constructor(props) {
        super(props)
        this.state = {
            name: null,
            address: null,
            rating: null,
            email: null,
        }

    }


    create() {
        fetch("http://localhost:3000/resturant", {
            method: "Post",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((response) => {
            response.json().then((results) => {
                alert("information Added")
            })
        })
        this.setState({
            name:"",
            address:"",rating:"",email:""
        })


    }


    render() {
        return (

            <><h1 className="heading">RestaurantCreate</h1>
            <div className="all-background-forms">
                
                <div className="forms">


                  
                    <input type="text" placeholder="Enter Restaurant Name" required value={this.state.name} onChange={(event) => { this.setState({ name: event.target.value }) }}/> <br />
                    <input type="text" placeholder="Address" value={this.state.address} onChange={(event) => { this.setState({ address: event.target.value }) }} /> <br />
                    <input type="number" step="any"  min="0" max="5" placeholder=" Rating out of 5 " value={this.state.rating}  onChange={(event) => { this.setState({ rating: event.target.value }) }} /> <br />
                    <input type="email" placeholder=" Email" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} /> <br />
                    
                    <button class="btn btn-warning"onClick={() => this.create()}>Submit</button>
                   
                </div>
            </div>
            </>
        )

    }
}

export default RestaurantCreate;

//from hooks{easy method}


// export default function RestaurantCreate() {

//     let history = useHistory();

//     const [info , setInfo] = useState({
//         name: "",
//         address:"",
//         rating:"",
//         email:""
//     })

//     const onInputChange = (e) =>{
//         setInfo({...info,[e.target.name]:e.target.value})
//     }

//     const create = async(e) =>{
//       e.preventDefault();

//       await axios.post(`http://localhost:3000/resturant`,info)
//             history.push("/")

//     }
//     return (
//         <div className="forms">



//             <input type="text" placeholder="Enter Restaurant Name" name = "name" value={info.name} onChange={e=>onInputChange(e)} /> <br />
//             <input type="text" placeholder="Address"  name = "address" value={info.address} onChange={e=>onInputChange(e)} /> <br />
//             <input type="number" placeholder=" Rating out of 5 "name = "rating" value={info.rating} onChange={e=>onInputChange(e)}  /> <br />
//             <input type="email" placeholder=" Email" name = "email" value={info.email} onChange={e=>onInputChange(e)} /> <br />
//             <button onClick={(e) => create(e)}>Submit</button>
//          </div>   

//     )
// }
