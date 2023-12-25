const schema=require('../model/product.schema');
async function getAllProducts(req,res){
    try{

        const getAllProduct=await schema.find();
        console.log(getAllProduct);
        if(getAllProduct && getAllProduct.length>0){
            httpResponseSuccessHandler(res,200,"Data fetched Successfully",getAllProduct)
        }else{
            httpResponseSuccessHandler(res,200,"No Data Found",[])

        }
                
    }catch(error){
        console.log(error)
        httpResponseHandlerError(res,400,error.message)
    }
}

module.exports.getAllProducts=getAllProducts