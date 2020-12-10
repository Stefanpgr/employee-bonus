import { useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {  useHistory } from 'react-router-dom';
import { ADD_GENERATED_REPORT, ADD_REPORT } from '../../actions';
import { getRandomImg } from '../../api/randomImg';
import EmployeeCards from '../../components/EmployeeCards';
import { calculateBonus } from '../../helper/calculateBonus';
import './style.scss';

const CreateReport = () => {
  let history = useHistory();
  const [name, setName] = useState('');
  const reports = useSelector((state) => state.reports);
  const dispatch = useDispatch();
  const [timeArrived, setTimeArrived] = useState({
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
  });

  const handleTime = ({ target }) => {
    setTimeArrived({ ...timeArrived, [target.name]: target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, timeArrived });
    const res = await getRandomImg();
    const employee = {
      name,
      timeArrived,
      picture: res.results[0].picture,
    };
    console.log(employee);
    dispatch({
      type: ADD_REPORT,
      payload: employee,
    });
    setTimeArrived({
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
    });
    setName('');
  };

  const handleGenerate = async () => {
    const result = await calculateBonus(reports);
    dispatch({
      type: ADD_GENERATED_REPORT,
      payload: result,
    });
    history.push('/report');
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <form className="form" onSubmit={handleSubmit}>
            <Row>
              <div className="col-md-12">
                <label htmlFor="text-input">Name</label> <br />
                <input
                  className="input"
                  value={name}
                  required
                  name="name"
                  id="text-input"
                  type="text"
                  onChange={({ target }) => setName(target.value)}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="text-input">Monday</label> <br />
                <input
                  name="monday"
                  value={timeArrived.monday}
                  required
                  className="input"
                  id="text-input"
                  type="time"
                  onChange={handleTime}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="text-input">Tuesday</label> <br />
                <input
                  required
                  name="tuesday"
                  value={timeArrived.tuesday}
                  className="input"
                  id="text-input"
                  type="time"
                  onChange={handleTime}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="text-input">Wednesday</label> <br />
                <input
                  required
                  name="wednesday"
                  value={timeArrived.wednesday}
                  className="input"
                  id="text-input"
                  type="time"
                  onChange={handleTime}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="text-input">Thursday</label> <br />
                <input
                  required
                  name="thursday"
                  className="input"
                  id="text-input"
                  type="time"
                  onChange={handleTime}
                  value={timeArrived.thursday}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="text-input">Friday</label> <br />
                <input
                  required
                  className="input"
                  name="friday"
                  id="text-input"
                  type="time"
                  onChange={handleTime}
                  value={timeArrived.friday}
                />
              </div>
            </Row>

            <Button type="submit" disabled={reports.length === 5 ? true:false}>Add</Button>
          </form>
        </Card.Body>
      </Card>
      <Row>
        {reports.map((el, i) => (
          <EmployeeCards
            key={i}
            name={el.name}
            imgUrl={el.picture.medium}
            timeArrived={el.timeArrived}
          />
        ))}
      </Row>

      {reports.length > 0 && (
        // <Link to='/reports' >
        <Button onClick={handleGenerate} disabled={reports.length === 5 ? false:true}>Generate Report</Button>
        // </Link>
      )}
      {/* <form className='form'>
                <div className='grid-item'>
                <label htmlFor="text-input">Name</label> <br />
<input className="input" id="text-input" type="text" />
                </div>
                <div className='flex-row'>
                <div className='grid-item'>
<label htmlFor="text-input">Monday</label> <br />
<input className="input" id="text-input" type="time" />
</div>
<div className='grid-item'>
<label htmlFor="text-input">Tuesday</label> <br />
<input className="input" id="text-input" type="time" />
</div>
<div className='grid-item'>
<label htmlFor="text-input">Wednesday</label> <br />
<input className="input" id="text-input" type="time" />
</div>
<div className='grid-item'>
<label htmlFor="text-input">Thursday</label> <br />
<input className="input" id="text-input" type="time" />
</div>
<div className='grid-item'>
<label htmlFor="text-input">Friday</label> <br />
<input className="input" id="text-input" type="time" />
</div>
                </div>
                
            </form> */}
    </Container>
  );
};

export default CreateReport;
