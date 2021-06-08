import { React, useState } from 'react'
import '../../../../App.css'
import NavbarAll from '../../../NavbarAll'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIos from 'react-icons/io'
import {
  Form,
  Button,
  Modal,
  Row,
  Col,
  Container,
  Table,
} from 'react-bootstrap'
import './customer.css'

function AddLeadModal(props) {
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter'>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Add Lead</Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid'>
        <Container>
          <Form>
            <Form.Group controlId='formFirstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter customers first Name'
              />
            </Form.Group>
            <Form.Group controlId='formLastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter customers second Name'
              />
            </Form.Group>
            <Form.Group controlId='formEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter customers email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

function Customers() {
  const [modalShow, setModalShow] = useState(false)
  return (
    <>
      <NavbarAll />
      <Container
        style={{
          paddingTop: '20vh',
        }}
      >
        <div className='table-header-section'>
          <IoIos.IoIosPeople color='blue' />
          Customers
          <Button
            style={{
              float: 'right',
            }}
            onClick={() => setModalShow(true)}
          >
            Add Lead
          </Button>
          <AddLeadModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>customer ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <FaIcons.FaEdit color='blue' />/
                <AiIcons.AiFillDelete color='red' />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <FaIcons.FaEdit color='blue' />/
                <AiIcons.AiFillDelete color='red' />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>
                <FaIcons.FaEdit color='blue' />/
                <AiIcons.AiFillDelete color='red' />
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Customers
