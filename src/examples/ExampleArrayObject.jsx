import { useState } from 'react';
import Typography from '../components/Typography';
import Button from '../components/Button';

function ExampleArrayObject() {
  const [product, setProduct] = useState({ name: '', price: 0 })
  const [productList, setProductList] = useState([{
    name: "React JS Class",
    price: 299,
  }]);

  const addProduct = (product) => {
    setProductList(prevState => [...prevState, product]);
    setProduct({ name: '', price: 0 });
  };

  const handleInputChange = (event) => {
    setProduct(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div className='flex flex-col space-y-2'>
      <ul>
        {productList.map((item, index) => (
          <div>
            <Typography>Product Name: {item.name}</Typography>
            <Typography>Product Price: {item.price}</Typography>
          </div>
        ))}
      </ul>
      <input name="name" className='p-5 bg-white rounded w-96' value={product.name} onChange={handleInputChange} />
      <input name="price" className='p-5 bg-white rounded w-96' type="number" value={product.price} onChange={handleInputChange} />
      <Button onClick={() => addProduct(product)}>Add Product</Button>
    </div>
  );
}

export default ExampleArrayObject