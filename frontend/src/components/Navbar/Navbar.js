import logo from '../logo.png';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { RiAdminFill } from "react-icons/ri"
import './Navbar.css'


function Navbar() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [stog, setStog] = useState(false)
    const navigate = useNavigate();

    const fetchData = () => {
      return (
        axios.get(`https://api.bcapoints.in/api/posts`).then((response) => setData(response.data))
      )
    }
    useEffect(() => {
      fetchData();
    }, []);


    return (
      <div className='px-5 py-3'>
        <nav className="navbar navbar-expand-lg navbar-light bg">
            <Link className="navbar-brand logo" to="/"><img className='logo' src={logo} alt="" width="150" height="144" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0  ul">
                <li className="nav-item li">
                  <Link className="nav-link links active" aria-current="page" to="/">Home</Link>
                </li>

                <li className="nav-item dropdown li">
                  <Link className="nav-link dropdown-toggle drop-link links" to="/subjct" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Subject
                  </Link>
                  <ul className="dropdown-menu drop-menu " aria-labelledby="navbarDropdown">
                  <li className="nav-item dropdown li">
                    <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      First Semester </Link>
                    <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item links" to="/subjct/It tools & Application">IT Tools & Application</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Functional English">Functional English</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Introduction to C Language">Introduction to C language</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Principle Of mathematic">Principles of mathmetics</Link></li>
                    </ul>
                  </li>

                  <li><hr className="dropdown-divider" /></li>

                  <li className="nav-item dropdown li">
                    <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Second Semester </Link>
                    <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item links" to="/subjct/Descrite mathematics">Discrete Mathematics</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Accounting & Financial management">Accounting & F. Management</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Digital Circuit & Logic Design">Digital Circuit & Logic Design</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Introduction to Object Oriented Programing & C++">Interoduction To Opps & C++</Link></li>
                    </ul>
                  </li>

                  <li><hr className="dropdown-divider" /></li>

                  <li className="nav-item dropdown li">
                    <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Third Semester </Link>
                    <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item links" to="/subjct/Operating System">Operating System</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Computer Oriented Mathematic">Computer Oriented Mathematic</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Data Structure">Data Structure</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Computer Organization & Architecture">Computer Organization & Architecture</Link></li>
                    </ul>
                  </li>

                  <li><hr className="dropdown-divider" /></li>

                  <li className="nav-item dropdown li">
                    <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Fourth Semester </Link>
                    <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item links" to="/subjct/Introduction to DBMS">Introduction to DBMS</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Operation Research">Operation Research</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Software Engineering">Software Engineering</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Computer Graphics">Computer Graphics</Link></li>
                    </ul>
                  </li>

                  <li><hr className="dropdown-divider" /></li>

                  <li className="nav-item dropdown li">
                    <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Fifth Semester </Link>
                    <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item links" to="/subjct/Internet & JAVA Programing">Internet & JAVA Programing</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/ORACLE & PL-SQL">ORACLE & PL/SQL</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Software Project Management">Software Project Management</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Computer Networks">Computer Networks</Link></li>
                    </ul>
                  </li>

                  <li><hr className="dropdown-divider" /></li>

                  <li className="nav-item dropdown li">
                    <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Six Semester </Link>
                    <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item links" to="/subjct/Advance Network & Network Security">Advance Network & Network Security</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Web Development Tools & Techniques">Web Development Tools & Techniques</Link></li>
                    </ul>
                  </li>

                </ul>
                </li>
                <li className="nav-item li">
                  <Link className="nav-link links" to="/paper">Questions Paper</Link>
                </li>
                <li className="nav-item li">
                  <Link className="nav-link links" to="/blog">Blog</Link>
                </li>
                <li className="nav-item li">
                  <Link className="nav-link links" to="/books">Books</Link>
                </li>
                <li className="nav-item li">
                  <Link className="nav-link links" to="/about">About</Link>
                </li>
                <li className="nav-item li">
                  <Link className="nav-link links" to="/contact">Contact</Link>
                </li>
              </ul>
              <form className="d-flex ">
                <input onChange={(e) => setSearch(e.target.value)} onClick={() => { setStog(!stog) }} value={search} className="form-control me-2 search-bar" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-primary button" disabled onClick={()=>navigate('/admin')}><RiAdminFill  /></button>
              </form>
            </div>
        </nav>
        {stog && <div className='searchArea container'>
          {search !== '' && data.map(item => <div key={Math.random() * 10}>{item.title.toUpperCase().includes(search.toUpperCase()) && <Link className='searchFont' onClick={() => { setStog(!stog) }} to={`/search/${item.title}`}>{item.title}</Link>}</div>)}<br />
          {search ==='' && <span>type a latter for result.?????????????</span>}
        </div>}
      </div>
    )
  }

export default Navbar









