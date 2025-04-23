import React, { useEffect } from 'react'
import { useProductStore } from '../store/useProductStore'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react';

const ProductPage = () => {
  const {
    currentProduct,
    loading,
    error,
    fetchProduct,
    deleteProduct,
    updateProduct,
    formData,
    setFormData,
  } = useProductStore();

  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id, "id from params")
  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);

  console.log(currentProduct, "currentProduct");

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loading loading-spinner loading-lg" />
      </div>
    );
  }


  if (error) {
    return (
      <div className="error-message">{error}</div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8 max-w-4xl'>
      <button onClick={() => navigate('/')}
        className='btn btn-primary mb-4'
      >
        <ArrowLeftIcon className='size-5 mr-2' />
        Go to Home
      </button>


      <div className=' details-holder grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* PRODUCT IMAGE */}
        <div className='rounded-lg overflow-hidden shadowd-lg bg-base-100'>
          <img
            src={currentProduct?.image}
            alt={currentProduct?.name}
            className='size-full object-cover'
          />
        </div>
        {/* PRODUCT FORM */}

        <div className=' card bg-base-100 shadow-lg'>

          <div className='card-body'>
            <h2 className='card-title text-2xl mb-6'>Edit Product</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              updateProduct(id, formData);
            }} className='space-y-6'

            >
              {/*PRODUCT NAME INPUT */}

              <div className='form-control'>

                <label className='label'>
                  <span className='label-text text-base font-medium'>Product Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Enter product name'
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className='input input-bordered'
                  required
                />
              </div>

              {/*PRODUCT PRICE INPUT */}

              <div className='form-control'>

                <label className='label'>
                  <span className='label-text text-base font-medium'>Price</span>
                </label>
                <input
                  type='text'
                  placeholder='Enter product price'
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className='input input-bordered'
                  required
                />
              </div>



              {/*PRODUCT IMAGE URL INPUT */}
              <div className='form-control'>

                <label className='label'>
                  <span className='label-text text-base font-medium'>Image Url</span>
                </label>
                <input
                  type='text'
                  placeholder='Enter product name'
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className='input input-bordered'
                  required
                />
              </div>

              {/*BUTTONS  TO DELTE AND UPDATE PRODUCTS*/}
              <div className='flex space-x-4'>
                <button
                  type='button'
                  onClick={() => {
                    deleteProduct(id);
                    navigate('/');
                  }}
                  className='btn btn-danger'
                >
                  Delete Product
                </button>
                <button onClick={() => { navigate('/') }} type='submit' className='btn btn-primary'>
                  Update Product
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
};


export default ProductPage
