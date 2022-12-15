import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/action'
import { Link, useParams } from 'react-router-dom'
import {AiFillStar } from 'react-icons/ai'

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct()
    }, [])

    const Loading = () => {
        return (
          <>
            Loading ...
          </>
        )
      }

    const ShowProduct = () => {
        return (
            <>
                <div className='container'>
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                    <div className='description'>
                        <h4>{product.category}</h4>
                        <h1>{product.title}</h1>
                        <p>Rating {product.rating && product.rating.rate} | <AiFillStar /></p>
                        <div className='price'>
                            <p>$ {product.price}</p>
                        </div>
                        <p>{product.description}</p>
                        <button onClick={() => addProduct(product)}>Add to Cart</button>
                        <Link to='/cart'>Go to Cart</Link>
                    </div>
                </div>
            </>
        )
    }

  return (
    <div>
        <div className='container'>
            <div className='row'>
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    </div>
  )
}

export default Product