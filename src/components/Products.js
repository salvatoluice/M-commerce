import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './products.css';

const Products = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if(componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter)
      }

      return () => {
        componentMounted = false;
      }


    } 
    getProducts();
  }, [])

  const Loading = () => {
    return (
      <>
        Loading ...
      </>
    )
  }
  const filterProduct = (cat) => {
    const updatedList = data.filter((x)=>x.category === cat);
    setFilter(updatedList)
  }

  const ShowProducts = () => {
return (
  <>
      <div className='buttons'>
      <button className='btn' onClick={() => setFilter(data)}>All</button>
      <button className='btn' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
      <button className='btn' onClick={() => filterProduct("women's clothing")}>Women's's Clothing</button>
      <button className='btn' onClick={() => filterProduct("jewelery")}>Jewelery</button>
      <button className='btn' onClick={() => filterProduct("electronics")}>Electronic</button>
    </div>
    <div className='container'>
    {filter.map((product) => {
      return (
        <>
          <div className='product'>
            <img src={product.image} alt={product.title} />
            <h4>{product.title.substring(0, 12)}...</h4>
            <p>${product.price}</p>
            <Link to={`/products/${product.id}`}>Buy This</Link>
          </div>
        </>
      )
    })}
    </div>
  </>
)
  }


  return (
    <div>
      {loading ? <Loading /> : <ShowProducts /> }
    </div>
  )
}

export default Products