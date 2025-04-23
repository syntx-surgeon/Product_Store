 import {create} from 'zustand';
 import axios from 'axios';
 import { toast } from 'react-hot-toast';

const BASE_URL="http://localhost:3000";

 export const useProductStore=create((set,get)=>({
        //products state
        products:[],
        loading:false,
        error:null,

    //Form State
    formData:{
        name:"",
        price:"",
        image:"",
    },

    setFormData:(formData)=>set({formData}),
    resetForm:()=>set({formData:{name:"",price:"",image:""}}),

    addProducts: async()=>{
        e.preventDefault();
        set({loading:true});
        try{
            
        const {formData}=get()
        await axios.post(`${BASE_URL}/api/products`,formData);
            await get().fetchProducts();
            get().resetForm();
            toast.success("Product added successfully");
            //close the model
        }catch(error){
            console.error("Error in addProducts function:", error.message);
            toast.error(error.message || "Failed to add product");
        }finally{
            set({loading:false})
        }
    },

    
        fetchProducts:async ()=>{
            set({loading:true});
            try{
               const response= await axios.get(`${BASE_URL}/api/products`)
               set({products:response.data.data,
                error:null,
               });

            }catch(error)
            {
                if(error.status==429)set({error:"Rate Limit exceeded"});
                else set({error:"Failed to fetch products"});
            }finally{
                set({loading:false})
            }
        },


        deleteProducts: async (id) => {
            set({ loading: true });
            try {
              // Validate ID
              if (!id || isNaN(id)) {
                throw new Error("Invalid product ID");
              }
          
              // Make DELETE request
              await axios.delete(`${BASE_URL}/api/products/${id}`);
          
              // Update state by filtering out the deleted product
              set((prev) => ({
                products: prev.products.filter((product) => product.id !== id),
              }));
          
              // Optional: Show success notification
              toast.success("Product deleted successfully");
            } catch (error) {
              console.error("Error in deleteProducts function:", error.message);
              toast.error(error.message || "Failed to delete product");
            } finally {
              set({ loading: false });
            }
          },

        addProducts:async()=>{

        }

 }));