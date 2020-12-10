



const EmployeeCards = ({imgUrl, timeArrived, name}) => {

    return(
      <div className='employee-cards_wrapper'>

      
        <div className='card-container' >
        <img  src={imgUrl}  style={{width: '10rem'}} />
        <div>
    <h5>{name}</h5>
          <p>
       
            Mon:{timeArrived.monday}, Tue: {timeArrived.tuesday}, Wed: {timeArrived.wednesday}, Thurs: {timeArrived.thursday}, Friday: {timeArrived.friday}
       
          </p>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </div>
      </div>
      </div>
    )
}


export default EmployeeCards