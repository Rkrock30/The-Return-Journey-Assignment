const schema=require('../model/product.schema');
const { getAllProducts } = require('./getProducts');
const validatePayload = require("../utils/bodyValidation").bodyValidation
//onst product = new mongoose.model("product")

async function createProducts(req,res){
    try{
        const valSchema = Joi.object()
        .keys({
            productName: Joi.string().required().allow(null, ""),
            price: Joi.number().required().allow(null, ""),

        })
        .unknown(false);
        
    let body = await validatePayload(res, valSchema, req.body);
    let productId=await schema.find();
    if(productId && productId.length>0){
        productId=productId.length
    }else{
        productId=0
    }
    let createProd=await schema.create({
        productId:productId+1,
        productName:body.productName,
        price :body.price

    })
    if(createProd){
        console.log(createProd);
        httpResponseSuccessHandler(res,200,"Data created Successfully",[createProd])
    }

                
    }catch(error){
        console.log(error)
        httpResponseHandlerError(res,400,error.message)
    }
}

module.exports.createProducts=createProducts