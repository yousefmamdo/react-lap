import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form} from 'react-bootstrap';


class Formes extends React.Component {
    render() {
        return (
            <>
                <Form>
                <Form.Group className="mb-3" controlId="horned">
                    <Form.Label>filter by number of horns</Form.Label>
                    
                        <Form.Select onChange={this.props.submitHandler} aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="All">All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="100">More Than 3</option>
                        </Form.Select>

                    </Form.Group>
                </Form>
            </>
        );
    }
}

export default Formes;