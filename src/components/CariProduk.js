import { FaCamera, FaHouse, FaShirt } from "react-icons/fa6";

const CariProduk = () => {
  return (
    <div className="bg-primary mb-3" style={{ borderRadius: "0 0 50px 50px" }}>
      <div className="container px-4 pt-5 pb-4">
        <h1 className="text-white">Cari produk yang kamu butuhkan..</h1>
        <div className="d-flex justify-content-center mt-4 mb-3">
          <div className="row">
            <div className="col ">
              <button className="btn btn-light btn-lg rounded-pill  px-4">
                <p className="text-primary fs-1 ">
                  <FaShirt />
                </p>
              </button>
            </div>
            <div className="col mx-2">
              <button className="btn btn-light btn-lg rounded-pill px-4">
                <p className="text-primary fs-1">
                  <FaCamera />
                </p>
              </button>
            </div>
            <div className="col">
              <button className="btn btn-light btn-lg rounded-pill  px-4">
                <p className="text-primary fs-1 ">
                  <FaHouse />
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CariProduk;
