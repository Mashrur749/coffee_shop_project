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
    const [cart, setCart] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const [totalCost, setTotalCost] = useState(0)

    useEffect(() => {
        resetMenu();
        setUserInfo(JSON.parse(localStorage.getItem("userInfo")))
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    function resetMenu(){
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
            resetMenu()
            alert("Item Added")

        })
        .catch(err => {
            console.log(err)
            console.log(err.response.data.message)
        });
    }

    function handleAddToCart(e){
        e.preventDefault();
        let input = e.target.getElementsByTagName("input")[0];
        let item = {
            amount: input.value,
            id: input.dataset.itemId,
            price: input.dataset.itemPrice,
            itemname: input.dataset.itemName
        }
        setCart(prevCart => [...prevCart, item])
        setTotalCost(prevState => prevState + (item.price*item.amount))


    }

    function handleAddOrder(){
        // axios.post('http://localhost:4000/order/add', {
        //     itemname: newMenuItem,
        //     category,
        //     price: parseFloat(price)
        // }, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response => { 
        //     console.log("success")
        //     resetMenu()
        //     alert("Item Added")

        // })
        // .catch(err => {
        //     console.log(err)
        //     console.log(err.response.data.message)
        // });
    }


    return (
        <div>
            <h1>Menu</h1>
            {userInfo && userInfo.usertype == "Employee" && 
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
                </div>}



            <Container>
                <Row>
                    <Col>
                        <ListGroup align="left">
                            {menu.map(item => (
                                    <ListGroup.Item key={item.id}> 
                                        Item Name: {item.itemname} <br/>
                                        Category: {item.category}   <br/>
                                        Price: {item.price} <br/>
                                        {userInfo && userInfo.usertype == "Customer" &&
                                            <form action="" onSubmit={handleAddToCart}>
                                                Number of Items to be Added: <input defaultValue="1" data-item-name={item.itemname} data-item-price={item.price} data-item-id={item.id} min="1" type="number" width="10px"/> 
                                                <span> </span>
                                                <Button type="submit" size="sm"> Add to cart </Button>
                                            </form>
                                        }
                                        </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    {cart.length > 0 && <Col>
                        <ListGroup align="left">
                            {cart.map((item, idx) => (
                                <ListGroup.Item key={idx}> 
                                    Item Name: {item.itemname} <br/>
                                    Item Price: {item.price}$ <br/>
                                    Item Amount: {item.amount} <br/>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>        
                        
                        <ListGroup align="left">
                                Total: {totalCost}$
                        </ListGroup>
                        <ListGroup align="left">
                                <Button onClick={handleAddOrder}>Order</Button>
                        </ListGroup>
                    </Col>}
                </Row>
            </Container>
            
        </div>
    )
}
