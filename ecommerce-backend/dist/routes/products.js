import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getSingleProduct, getlatestProducts, newProduct, updateProduct } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";
const app = express.Router();
// create new Product   - /api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);
// to get all products with filter   -api/v1/products/all
app.get("/all", getAllProducts);
// to get last 5 products   -api/v1/products/latest
app.get("/latest", getlatestProducts);
// to get all unique products   -api/v1/products/categories
app.get("/categories", getAllCategories);
// to get all products   -api/v1/products/admin-products
app.get("/admin-products", adminOnly, getAdminProducts);
app.route("/:id")
    .get(getSingleProduct)
    .put(adminOnly, singleUpload, updateProduct)
    .delete(adminOnly, deleteProduct);
export default app;
