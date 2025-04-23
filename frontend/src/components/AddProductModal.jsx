import { DollarSignIcon, Package2Icon } from 'lucide-react';
import React, { useState } from 'react';
import { useProductStore } from './path-to-your-store'; // Adjust the import path

const AddProductModal = () => {
  const { addProducts } = useProductStore();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProducts(formData);
      setFormData({ name: '', price: '' }); // Reset form after submission
      document.getElementById('add-product-modal').close(); // Close modal
      // Optional: Show success toast (if using react-toastify)
      // toast.success('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error.message);
      // Optional: Show error toast
      // toast.error(error.message || 'Failed to add product');
    }
  };

  return (
    <dialog id="add-product-modal" className="modal">
      <div className="modal-box">
        {/* Close Button */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
        </form>
        {/* Modal Header */}
        <h3 className="font-bold text-xl mb-8">Add New Product</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6">
            {/* Product Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Product Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <Package2Icon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="Enter product name"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
            </div>
            {/* Product Price Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Product Price</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <DollarSignIcon className="size-5" />
                </div>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddProductModal;