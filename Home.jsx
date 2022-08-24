import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import{Link} from "react-router-dom";

const Home = () => {
  return (
 <>
 <div className='container mt-2'>
<h1 className='text-center mt-2'>Image uploder MERN stack</h1>
<div className='text-end'>
<Button variant="primary"> <Link to="/register" className='nav-link'>Add User</Link></Button>
</div>
<div className='row d-flex justify-content-between align-iteams-center mt-5'>
<Card style={{ width: '22rem',height:'18rem' }} className="mb-3" >
      <Card.Img variant="top" style={{ width: '100px',textAlign:"center",margin:"auto" }}  src="/boy.png"  />
      <Card.Body className='text-center'>
        <Card.Title>User Name: sharjeel</Card.Title>
        <Card.Text>
          Date Added : 20/08/2022
        </Card.Text>
        <Button variant="danger" className='col-lg-6 text-center'>Delete</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem',height:'18rem' }} className="mb-3" >
      <Card.Img variant="top" style={{ width: '100px',textAlign:"center",margin:"auto" }}  src="/boy.png"  />
      <Card.Body className='text-center'>
        <Card.Title>User Name: sharjeel</Card.Title>
        <Card.Text>
          Date Added : 20/08/2022
        </Card.Text>
        <Button variant="danger" className='col-lg-6 text-center'>Delete</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem',height:'18rem' }} className="mb-3" >
      <Card.Img variant="top" style={{ width: '100px',textAlign:"center",margin:"auto" }}  src="/boy.png"  />
      <Card.Body className='text-center'>
        <Card.Title>User Name: sharjeel</Card.Title>
        <Card.Text>
          Date Added : 20/08/2022
        </Card.Text>
        <Button variant="danger" className='col-lg-6 text-center'>Delete</Button>
      </Card.Body>
    </Card>       
    
</div>
 </div>
 </>
  )
}

export default Home
