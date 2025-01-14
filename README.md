# Inventory Management System

## Prerequisites
Before running the project, make sure you have:

   - Node.js (version >= 14)
   - MongoDB (local or cloud instance like MongoDB Atlas)
   - NPM

## Installation
1. Clone the repository (SSH):
   
    `git clone git@github.com:OutM1ckey/inventory-management-system.git`

    `cd inventory-management-system`

2. Install dependencies

    `npm install`

3. Create `.env` running `cp .env.example .env` command and set up environment variables

    `PORT=3000`

    `DATABASE_URL=<your-mongodb-connection-string>`

## Running the Application
1. Start the server:
   
    `npm start`

## API Endpoints
### Products
   - GET /products - Retrieve all products.
   - POST /products - Create a new product.
   - POST /products/:id/restock - Increase product stock.
   - POST /products/:id/sell - Decrease product stock.
### Orders
   - POST /orders - Create a new order.

## API Examples
### Get all products
```http
GET http://localhost:3000/products
```

### Create a new product
```http
POST http://localhost:3000/products
```

``` json
{
  "name": "name",
  "description": "description",
  "price": 123,
  "stock": 123
}
```

### Restock a product
```http
POST http://localhost:3000/products/:id/restock
```

``` json
{
    "increaseStock": 123
}
```

### Sell a product
```http
POST http://localhost:3000/products/:id/sell
```

``` json
{
    "decreaseStock": 123
}
```

### Create a new order
```http
POST http://localhost:3000/orders
```

``` json
{
    "customerId": "customerId",
    "products": [
        { 
            "productId": "productId",
            "quantity": 123 
        }
    ]
}
```
