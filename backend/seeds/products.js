import {sql} from "../config/db.js";


// Sample product data to seed the database
// You can add more products or modify the existing ones as needed
const SAMPLE_PRODUCTS = [
    {
        name:"Premium Headphones",
        price:299.99,
        image:
        "https://images.unsplash.com/photo-1585748420928-%e560c06d30e?w=800&auto=formst&fit=crop&q=60",
    },
    {
        name:"Premium Headphones",
        price:299.99,
        image:
        "https://images.unsplash.com/photo-1585748420928-%e560c06d30e?w=800&auto=formst&fit=crop&q=60",
    },
    {
        name:"Premium Headphones",
        price:299.99,
        image:
        "https://images.unsplash.com/photo-1585748420928-%e560c06d30e?w=800&auto=formst&fit=crop&q=60",
    },
    {
        name:"Premium Headphones",
        price:299.99,
        image:
        "https://images.unsplash.com/photo-1585748420928-%e560c06d30e?w=800&auto=formst&fit=crop&q=60",
    },


];


async function seedDatabase() {

    try{
        // first,clear exsiting data
        await sql`TRUNCATE TABLE products RESTART IDENTITY`

        //insert all products

        for(const product of SAMPLE_PRODUCTS)
        {
            await sql`
            INSERT INTO products (name, price, image)
                VALUES (${product.image}, ${product.price}, ${product.image})
            `;
        }
        console.log('DATABASE SEEDED WITH SAMPLE PRODUCTS');
        process.exit(0);
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
    
}

seedDatabase();