import {
  BsFillHouseDoorFill,
  BsSearch,
  BsFillPersonFill,
  BsHeartFill,
  BsCartFill,
} from "react-icons/bs";

const Navigation = () => {
  return (
    <nav
      className="navbar navbar-dark bg-primary fixed-bottom "
      style={{ borderRadius: "35px 35px 0 0" }}>
      <div className="container">
        <ul className="nav mx-auto">
          <li className="nav-item">
            <button
              className="btn btn-light btn-lg text-primary rounded-pill"
              href="#">
              <i className="fs-4">
                <BsFillHouseDoorFill />
              </i>
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-lg text-white" href="#">
              <i className="fs-4">
                <BsSearch />
              </i>
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-lg text-white" href="#">
              <i className="fs-4">
                <BsCartFill />
              </i>
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-lg text-white" href="#">
              <i className="fs-4">
                <BsHeartFill />
              </i>
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-lg text-white" href="#">
              <i className="fs-4">
                <BsFillPersonFill />
              </i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
