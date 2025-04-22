import React from 'react';
import { EditIcon,Trash2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';
import {useProductStore} from "../store/useProductStore.js"

const ProductCard = ({ product }) => {
    const {deleteProducts}=useProductStore();

    return (
        <div className="card bg-base-100 shadow-xl h-[65vh] hover:shadow-2xl transition-shadow duration-300">
            {/* PRODUCT IMAGE */}
            <figure className="">
                <img
                    src={product.image}
                    alt={product.name}
                    className="top-0 left-0 w-full h-full object-cover"
                />
            </figure>

            <div className="card-body">
                {/* PRODUCT INFO */}
                <h2 className="card-title text-lg font-semibold">{product.name}</h2>
                <p className="text-2xl font-bold text-primary">${Number(product.price).toFixed(2)}</p> {/* Fixed typo 'calssName' to 'className' */}

                {/* CARD ACTIONS */}
                <div className="card-actions justify-end mt-4">
                    <Link to={`/product/${product.id}`} className="btn btn-sm btn-info btn-outline">
                        <EditIcon className="size-4" />
                    </Link>

                    <button className="btn btn-sm btn-error btn-outline" 
                    onClick={()=> deleteProducts(product.id)}

                    >
                      
                        <Trash2Icon className='sixe-4'/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;