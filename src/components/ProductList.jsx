import { useEffect, useState } from "react";
import Paginacion from "../components/Paginacion";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productsPorPagina, setProductsPorPagina] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const totalProducts = products.length

  const lastIndex = currentPage * productsPorPagina
  const firstIndex= lastIndex - productsPorPagina

  const productList = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const products = await data.json();
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productList();
  }, []);

  return (
    <>
      <div className="container-products p-5">
        {
            products.map(product => (
                <div className="card-product card" key={product.id}>
                    <figure className="container-img">
                    <img src={product.image} alt={product.title} className="card-image"/>
                    </figure>
                    <div className="info-product ">
                        <h3>{product.title}</h3>
                        <p className="price">$ {product.price}</p>
                        <button>Añadir al carrito</button>
                    </div>
                </div>
            )).slice(firstIndex,lastIndex)
        }
      </div>
      <Paginacion productsPorPagina={productsPorPagina} currentPage={currentPage} setCurrentPage={setCurrentPage}
      totalProducts={totalProducts}/>
    </>
  );
};

export default ProductList;
