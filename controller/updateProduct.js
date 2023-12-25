const schema=require('../model/product.schema')
const moment=require('moment')
const validatePayload = require("../utils/bodyValidation").bodyValidation


async function updateProducts(req,res){
    try{
        let id=req.params.id
        const valSchema = Joi.object()
        .keys({
            productName: Joi.string().allow(null, ""),
            price:Joi.number().allow(null, ""),
        })
        .unknown(false);
    let body = await validatePayload(res, valSchema, req.body);
    let createProd=await schema.updateMany({
        productId:id},{productName:body.productName,price:body.price,updated_on:moment().format('YYYY-MM-DD')})
    if(createProd){
        console.log(createProd);
        httpResponseSuccessHandler(res,200,"Data Updated Successfully",[createProd])
    }

                
    }catch(error){
        console.log(error)
        httpResponseHandlerError(res,400,error.message)
    }
}

module.exports.updateProducts=updateProducts