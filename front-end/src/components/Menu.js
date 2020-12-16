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
    const [category, setCategory] = useState("Tea");
    const [newMenuItem, setNewMenuItem] = useState("");
    const [price, setPrice] = useState(0);

    useEffect(() => {
        resetMent();
    }, []);

    function resetMent(){
        axios.get("http://localhost:4000/menu/")
        .then(res => {
            setMenu(res.data)
        })
    }

    function handleAddItem(e){
        e.preventDefault();
        axios.post('http://localhost:4000/menu/add', {
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
            resetMent()
            alert("Item Added")

        })
        .catch(err => {
            console.log(err)
            console.log(err.response.data.message)
        });
    }


    return (
        <div>
            <h1>Menu</h1>
            <div>
                <form onSubmit={handleAddItem}>
                    <Container fluid="md">
                        <h4>Add Menu Item:</h4> 
                        <Row>
                            <Col sm="2" align="left">
                                <input  type="text" value={newMenuItem} onChange={e => setNewMenuItem(e.target.value)} placeholder="Item Name" required/>
                            </Col>
                            <Col sm="2" align="left">
                                <Form.Control size="sm" value={category} onChange={(e) => {setCategory(e.target.value)}} as="select">
                                    <option value="Coffee">Coffee</option>
                                    <option value="Tea">Tea</option>
                                </Form.Control>
                            </Col>
                            <Col sm="12" align="left">
                                <input  type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" required/>
                            </Col>
                            <Col sm="12" align="left">
                                <Button type="submit"> Submit </Button>
                            </Col>
                        </Row>
                        <br/>

                    </Container>
                </form>
            </div>
            <ListGroup align="left">
                {menu.map(item => (
                    <ListGroup.Item key={item.id}> 
                        Item Name: {item.itemname} <br/>
                        Category: {item.category}   <br/>
                        Price: {item.price} <br/>
                        Number of Items to be Added: <input type="number" width="10px"/>
                        </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}
