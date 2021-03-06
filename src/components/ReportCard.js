import { format } from '../helper/formatter';
import './style.scss';

const ReportCard = ({ name, imgUrl, bonus }) => {
  return (
    <div className="report-card">
      <div className="employee-container">
        <div className="employee-wrapper">
          <div className="employee-info">
            <img
              src={imgUrl}
              alt={name}
              className=" rounded-circle"
              width="50"
            />
            <div >
              <h6 className="employee-name">{name}</h6>
              <span className="employee-type">employee</span>
            </div>
          </div>
          <div className="bonus">
            {bonus && format(bonus * 50)} {bonus && (<span>bonus</span>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
