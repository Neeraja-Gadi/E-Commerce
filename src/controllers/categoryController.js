import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";


export const createCategoryController=async(req,res)=>{
    try {
        const {name}=req.body;
        if(!name){
            return res.send({error:`Name is require`})
        }
        const existingCategory= await categoryModel.findOne({name})
        if(existingCategory){
            return res.status(200).send({
                success :false ,
                message:`Already this Category exists`,
               
            })
        }
        const category = await categoryModel({name,slug:slugify(name)}).save()
        res.status(201).send({
            success :true,
            message:`new category created`,
            category
        })
    } catch (error) {
        res.status(500).send({
            success :false,
            message:`Error in the categoryController`,
            error:error
        })
    }
}


export const updateCategory=async(req,res)=>{
    try {
        const {name}=req.body
        if(!name){
            return res.send({error:`Name is require`})
        }
        const {id}=req.params
        const category=await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        res.status(200).send({
            success:true,
            message:"Category updated",
            category
        })
    } catch (error) {
        res.status(500).send({
            success :false,
            message:`Error in updateCategoryController`,
            error:error
        })
    }
    
}

export const categoryController=async(req,res)=>{
    try {
        const category = await categoryModel.find({})
        res.status(200).send({
            success:true,
            message:'all category',
            category
        })
        
    } catch (error) {
        res.status(500).send({
            success :false,
            message:`Error in getting category`,
            error:error
        })
    }
}

export const singleCategoryController=async(req,res)=>{

    try {
        const {slug}=req.params

        const category=await categoryModel.findOne({slug:slug})
        
        res.status(200).send({
            success:true,
            message:`get single category successfully`,
            category
        })
        
    } catch (error) {
        res.status(500).send({
            success :false,
            message:`Error in getting single category`,
            error:error
        })
    }
}

export const deleteCategoryController=async(req,res)=>{
    try {
        const {id}=req.params
        const category=await categoryModel.findByIdAndDelete(id)

        res.status(200).send({
            success:true,
            message:`${category.slug} Category deleted `
        })
    } catch (error) {
        res.status(500).send({
            success :false,
            message:`Error while delete category`,
            error:error
        })
    }
}