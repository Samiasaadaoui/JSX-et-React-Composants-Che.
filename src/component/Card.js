import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cardss () {
  return (
    <div className='profil' >
    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.15752-9/306534116_780536253265486_3225102229263955233_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ozh6GaLgFicAX_aX4ed&_nc_ht=scontent.ftun9-1.fna&oh=03_AVKePJcTaZmobkKM-SUlinbD9yyCAm97eOObLO_93L1cKA&oe=63484F2C"  alt='' height="150px" width="500px"  />
      <Card.Body>
        <Card.Title>Full Name: SAADAOUI SAMIA</Card.Title>
        <Card.Text>
          Address: Ezzahra
        </Card.Text>
       
        <Button variant="primary">Visit my Profile</Button>
      </Card.Body>
    </Card>
    
    </div>
  )
}

export default Cardss