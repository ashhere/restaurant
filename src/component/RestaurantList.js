import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

class RestaurantList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loading: true,
        }

    }

    componentDidMount() {
        // const response = fetch(`http://localhost:3000/resturant`);
        // const data =   response.json();
        // console.log(data);

        fetch("http://localhost:3000/resturant").then((response) => {
            response.json().then((results) => {

                this.setState({ list: results, loading: false })
                console.log(this.state.list)

            })
        })
    }

    async deleteUser(id) {
        await axios.delete(`http://localhost:3000/resturant/${id}`);
        this.componentDidMount();
    }

    render() {

        if (this.state.value) {
            return <h1>Loading.....</h1>
        }


        return (
            <><h1 className="heading">RestaurantList</h1>
                <div className="all-background">


                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Rating</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.list.map((result, i) =>



                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{result.name}</td>
                                    <td>{result.address}</td>
                                    <td>{result.rating}</td>
                                    <td>{result.email}</td>
                                    <td>
                                        <Link class="btn btn-primary mr-2" to={`detail/${result.id}`}  ><VisibilityOutlinedIcon/></Link>
                                        <Link class="btn btn-primary mr-2" to={`update/${result.id}`}  ><EditOutlinedIcon /></Link>

                                        <Link class="btn btn-danger " onClick={() => this.deleteUser(result.id)}><DeleteForeverOutlinedIcon /></Link>

                                    </td>
                                </tr>


                            )}
                        </tbody>
                    </Table>


                </div>
            </>
        )
    }
}

export default RestaurantList;