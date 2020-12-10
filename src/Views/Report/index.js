import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReportCard from '../../components/ReportCard';
import './style.scss'


const Report = () => {
    const genReports = useSelector((state) => state.genReports);
  return (
      <div className='wrapper'>
       
    <div className="cards-wrapper_grid">
    <h1>Reports</h1>
    {genReports && genReports.map((el, i) => (
      <Link key={i} to={{pathname: `/report/${el.name}`,
      state: { ...el }}}>
      <ReportCard  imgUrl={el.picture.thumbnail} name={el.name} bonus={el.bonus} />
      </Link>
        
    )) }
    </div>
    </div>
  );
};

export default Report;
