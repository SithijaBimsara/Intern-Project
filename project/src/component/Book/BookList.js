import React,{Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import {ModalFooter,ModalBody,ModalHeader,FormGroup,Label,Input,Table} from 'reactstrap';
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import {Button , Modal} from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";



class BookList extends Component{
    state = {

    }

    constructor(props) {
        super(props);
        this.state = {book:[],
            title:'',
                    show : false
        };
        this.toggleDiv = this.toggleDiv.bind(this)

    }

    toggleDiv() {
        const {show} = this.state;
        this.setState({
            show: show
        })
    }

    componentDidMount() {
        axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Kzhs9VXCNUvxOrigZ0EWd3sAqXYmKzUv")
            .then(response => {
                this.setState({book: response.data.results.books});
                console.log(response.data.results.books);
            } )
            .catch(function (error) {
                console.log(error);

            })
    }
    clickMe(book11){
        this.setState({show:!this.state.show})
        console.log(book11);

    }

    render() {
        let Book = this.state.book.map((book1) => {
                return(

                    <Card style={{ width: '21.2rem', marginTop: 20, marginRight: 20, marginLeft: 20}} >
                        <Card.Header as="h5">{book1.title}</Card.Header>
                        <Card.Img variant="top" src={book1.book_image} />
                        <Card.Body>
                            <Card.Text>Discription</Card.Text>
                            <Card.Text>
                                {book1.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button color="danger" size="sm" className="mr-2"
                                    onClick={this.clickMe.bind(this, book1)}> Details
                            </Button>
                            <Modal show ={this.state.show} >
                                <Card.Header variant="flush">
                                    <Card.Title >{book1.title}</Card.Title>
                                </Card.Header>

                                <Modal.Body>
                                    <Card.Title >Author</Card.Title>
                                    <Card.Text>
                                        {book1.author}
                                    </Card.Text>

                                    <Card.Title >publisher</Card.Title>
                                    <Card.Text>
                                        {book1.publisher}
                                    </Card.Text>

                                    <Card.Title>Rank</Card.Title>
                                    <Card.Text>
                                        {book1.rank}
                                    </Card.Text>
                                    <Card.Title>Weeks On List</Card.Title>
                                    <Card.Text>
                                        {book1.weeks_on_list}
                                    </Card.Text>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Nav.Link href={book1.amazon_product_url}>Buy This Book</Nav.Link>
                                    <Button onClick={()=>{this.clickMe()}}>Close</Button>
                                </Modal.Footer>
                            </Modal>


                        </Card.Footer>

                    </Card>

                )
            }
        )
        return(

            <div className="backa">
                <div className="col-lg-20 d-flex align-items-stretch">
                    <Container fluid >
                        <Row>
                            {Book}
                        </Row>
                    </Container>
                </div>
            </div>
        );


    }
}

export default  BookList;



