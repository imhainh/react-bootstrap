import { useState } from 'react';
import { Button, Alert, Row, Col, Toast } from 'react-bootstrap';

import './App.css';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <div className="Native-bootstrap">
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
      </div>
      <div className="react-bootstrap mt-3">
        <Button variant="outline-primary" className="mt-5">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="danger">Danger</Button>
      </div>
      <div className="react-bootstrap mt-3">
        <Alert variant="danger">
          This is a danger alert—check it out!
        </Alert>
        <Alert variant="primary">
          This is a outline-primary alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
          like.
        </Alert>
        <>
          <Alert show={show} variant="success">
            <Alert.Heading>How's it going?!</Alert.Heading>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
              lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
              fermentum.
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me y'all!
              </Button>
            </div>
          </Alert>

          {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
        <Row>
          <Col xs={6}>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
          </Col>
          <Col xs={6}>
            <Button onClick={() => setShow(true)}>Show Toast</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
