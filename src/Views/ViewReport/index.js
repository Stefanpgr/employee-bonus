import moment from 'moment';
import { format } from '../../helper/formatter';
import './style.scss';

const ViewReport = ({ location: { state } }) => {
  const formatTime = (time) => {
    const t = moment(time, 'HH:mm').format('LT');

    return t;
  };

  return (
    <div>
      <div className="report-body">
        {/* <div className='report-body_wrapper'> */}
        <h1>Report</h1>
        <div className="details-card">
          <div className="header-wrapper">
            <div className="header-content">
              <img
                src={state.picture.large}
                alt={state.name}
                className=" rounded-circle header-img"
                width="120"
              />
              <h5 className="employee-name">{state.name}</h5>
            </div>
            <div>
              <h6>Total Bonus:</h6>
              <h6 className="tbonus">{format(state.bonus * 50)}</h6>
            </div>
          </div>
        </div>
        <div className="details-card">
          <div className="details-card_titleWrp">
            <h5 className="details-card_title">Day</h5>

            <h5 className="details-card_title">Time Arrived</h5>
          </div>

          <div className="details-card_time">
            <p>Monday:</p> <p>{formatTime(state.timeArrived.monday)}</p>
          </div>
          <div className="details-card_time">
            <p>Tuesday:</p> <p>{formatTime(state.timeArrived.tuesday)}</p>
          </div>
          <div className="details-card_time">
            <p>Wednesday:</p> <p>{formatTime(state.timeArrived.wednesday)}</p>
          </div>
          <div className="details-card_time">
            <p>Thursday:</p> <p>{formatTime(state.timeArrived.thursday)}</p>
          </div>
          <div className="details-card_time">
            <p>Friday:</p> <p>{formatTime(state.timeArrived.friday)}</p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ViewReport;
