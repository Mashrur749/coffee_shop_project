import React, {useState, useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import axios from 'axios';


export default function Menu() {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        resetMenu();
    }, []);

    function resetMenu(){
        axios.get("http://localhost:4000/order/")
        .then(res => {
            setMenu(res.data)
        })
    }

    function handleOrderReady(e){
        e.preventDefault();
        axios.post('http://localhost:4000/order/update/${}', {
            itemname: newMenuItem,
            category,
            price: parseFloat(price)
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => { 
            console.log("success")
            resetMenu()
            alert("Item Added")

        })
        .catch(err => {
            console.log(err)
            console.log(err.response.data.message)
        });
    }
            // <ListGroup align="left">
            //     {menu.map(item => (
            //         <ListGroup.Item key={item.id}> 
            //             Item Name: {item.itemname} <br/>
            //             Category: {item.category}   <br/>
            //             Price: {item.price} <br/>
            //             Number of Items to be Added: <input type="number" width="10px"/>
            //             </ListGroup.Item>
            //     ))}
            // </ListGroup>

    return (
        <div>
            <h1>Orders</h1>
            
        </div>
    )
}
