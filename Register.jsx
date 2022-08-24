import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
    const [fname,setfname]=useState("");
const [file,setfile]=useState("");


const setdata=(e)=>{
    const{value}=e.target; 
    
}
const setimagefile=(e)=>{
    const{value}=e.target.file;
    
}
  return (
   <>
   <div className='container mt-3'>
    <h1 className='mt-3'>Upload your Data here </h1>
   <Form className='mt-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name
        </Form.Label>
        <Form.Control type="text" name='fname' onChange={setdata} placeholder="Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Select image</Form.Label>
        <Form.Control type="file" name='photo' onChange={setimagefile}/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Upload Data
      </Button>
    </Form>
   </div>
   </>
  )
}

export default Register
