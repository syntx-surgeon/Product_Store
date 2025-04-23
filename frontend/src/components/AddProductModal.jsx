import { DollarSignIcon, ImageIcon, Package2Icon } from 'lucide-react';
import { useProductStore } from '../store/useProductStore';

import React from 'react'

const AddProductModal = () => {
    const { addProducts,formData,setFormData} = useProductStore();

    return (
        <dialog id="add-product-modal" className="modal modal-open">
        <div className="modal-box">
          {/*Close Button*/}
          <form method='dialog'>
            <button className='btn btn-sm btn-circle absolute right-2 top-2'>✕</button>
          </form>
          {/*MODAL HEADER*/}
          <h3 className='font-bold text-xl mb-8'>Add New Product</h3>
  
          <form onSubmit={addProducts} className='space-y-6'>
            <div className='grid gap-6'>
              {/*PRODUCT NAME INPUT*/}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text text-base font-medium'>Product Name</span>
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50 '>
                    <Package2Icon className='size-5' />
                  </div>
  
                  <input
                    type="text"
                    placeholder="Enter product name"
                    className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>
              {/*PRODUCT PRICE INPUT*/}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text text-base font-medium'>Product Price</span>
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50 '>
                    <DollarSignIcon className='size-5' />
                  </div>
  
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>
              </div>
              {/*PRODUCT IMAGE INPUT*/}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text text-base font-medium'>Image Url</span>
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50 '>
                    <ImageIcon className='size-5' />
                  </div>
  
                  <input
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    )
}

export default AddProductModal