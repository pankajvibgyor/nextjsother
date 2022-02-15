import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link'

function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-xl">
    <Link href="/">
      <a className="navbar-brand">GyanBlog</a>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample07XL">
      <ul className="navbar-nav ml-auto" >
        <li className="nav-item active">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/LayoutPages/Article">
            <a className="nav-link">Articles</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/LayoutPages/Form">
            <a className="nav-link">Form</a>
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav" style={{paddingLeft:"700px"}}>
        <li className="nav-item text-nowrap">
          <Button className="nav-link">
              Signup
          </Button>
        </li>
      </ul>
     
    </div>
  </div>
</Nav>
  )
}
export default Navbar