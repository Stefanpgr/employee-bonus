import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ADD_GENERATED_REPORT, ADD_REPORT } from '../../actions';
import { getRandomImg } from '../../api/randomImg';
import ReportCard from '../../components/ReportCard';
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
  
    const res = await getRandomImg();
    const employee = {
      name,
      timeArrived,
      picture: res.results[0].picture,
    };
   
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
    <div className="form-wrapper">
       <h2 className='company-name'>Powernik Nigeria Limited</h2>

       <p className='text-center'>Employee Bonus Report Generator</p>
      <div className="form-body">
    
        <div className='wrapper'>
        <form
          className="card-container card-container_form"
          onSubmit={handleSubmit}
        >
          <div className="">
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

          <div className="">
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

          <div className="">
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

          <div className="">
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

          <div className="">
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

          <div className="">
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

          <button className='button' type="submit" disabled={reports.length === 5 ? true : false}>
            Add
          </button>
        </form>
        </div>
        <div className="wrapper">
          <div className="cards-wrapper_grid">
            {reports.map((el, i) => (
              <ReportCard
                key={i}
                name={el.name}
                imgUrl={el.picture.medium}
                timeArrived={el.timeArrived}
              />
            ))}
            {reports.length > 0 && (
     
              <button
              className={`button`}
                onClick={handleGenerate}
                disabled={reports.length === 5 ? false : true}
              >
                Generate Report
              </button>
            
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateReport;
