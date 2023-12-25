const schema=require('../model/product.schema')

async function deleteProducts(req,res){
    try{
        let id=req.params.id
      
    let deleteProd=await schema.deleteOne({ productId:id})
    if(deleteProd){
        console.log(deleteProd);
        httpResponseSuccessHandler(res,200,"Data Deleted Successfully",[deleteProd])
    }

                
    }catch(error){
        console.log(error)
        httpResponseHandlerError(res,400,error.message)
    }
}

module.exports.deleteProducts=deleteProducts