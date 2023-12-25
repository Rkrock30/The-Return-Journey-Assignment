function objectOperation(obj1,obj2){
    return Object.assign(obj1, obj2);
   }
   
   
   
   let fcarObject={
    brand: "Toyota",
    model: "Camry",
    year: 2023
   }
   
   let fcar2Object={
    color: "Blue",
    fuelType: "Gasoline"
   }
   
   console.log(objectOperation(fcarObject,fcar2Object))