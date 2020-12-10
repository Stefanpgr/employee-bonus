const { Card } = require("react-bootstrap")



const EmployeeCards = ({imgUrl, timeArrived, name}) => {

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
    <Card.Title>{name}</Card.Title>
          <Card.Text>
       
            Mon:{timeArrived.monday}, Tue: {timeArrived.tuesday}, Wed: {timeArrived.wednesday}, Thurs: {timeArrived.thursday}, Friday: {timeArrived.friday}
       
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    )
}


export default EmployeeCards