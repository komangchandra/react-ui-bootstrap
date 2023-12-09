import { useEffect, useState } from "react";
import { FaAlignLeft } from "react-icons/fa6";

const ProdukUnggulan = () => {
  const url = "https://api.escuelajs.co/api/v1/products?offset=0&limit=10";

  const [getProducts, setProducts] = useState([]);

  const getDataProducts = async () => {
    const respons = await fetch(url);
    const dataProduct = await respons.json();
    setProducts(dataProduct);
    console.log(getProducts);
  };

  useEffect(() => {
    getDataProducts();
  }, []);

  return (
    <div className="container px-4 mt-3 margin-bottom">
      <div className="row">
        <div className="col-10">
          <h4>Produk unggulan</h4>
        </div>
        <div className="col-2">
          <h4>
            <FaAlignLeft />
          </h4>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row mt-3">
          {getProducts.map((product) => (
            <CardProduct
              key={product.id}
              title={product.title}
              price={product.price}
              images={product.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function CardProduct(props) {
  return (
    <div className="col-6 mb-3">
      <div className="card bg-primary">
        <img src={props.images} className="card-img-top rounded img-blog p-2" />
        <div className="card-body">
          <h4 className="text-white">{props.title}</h4>
          <p className="text-white lh-1">$ {props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProdukUnggulan;
