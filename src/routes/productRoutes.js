import express from 'express'
import { createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from '../controllers/productController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import  formidable from 'express-formidable'

const router=express.Router()


router.post('/create-product',requireSignIn,isAdmin,formidable(), createProductController)

router.put('/update-product/:pid',requireSignIn,isAdmin,formidable(), updateProductController)

router.get('/get-product/',getProductController)

router.get('/get-product/:slug',getSingleProductController)

router.get('/product-photo/:pid',productPhotoController)

router.delete('/delete-product/:pid',requireSignIn,isAdmin,deleteProductController)

router.post('/product-filters',productFiltersController)

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search
router.get("/search/:keyword", searchProductController);

//similar products
router.get('/related-product/:pid/:cid',relatedProductController)

//category wise product
router.get("/product-category/:slug", productCategoryController);

export default router;