import { useSelector } from "react-redux"

const Navbar = () => {
    const genReports = useSelector((state) => state.genReports)
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
  <a className="navbar-brand" href="/">Powernik</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/">Create Report </a>
      {genReports && <a className="nav-item nav-link" href="/report">View Reports</a>}
 

    </div>
  </div>
</nav>
    )
}

export default Navbar