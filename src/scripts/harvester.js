//Collect the Harvest

export const harvestPlants = (plant) =>{
    // empty array for havested plants
    // const seedObjects = [];
    
    // //entering array of objects
    // for(let i = 0; i <plant.length; i++){
    //     //determining the number of output
    //     const output = plant[i].output;
    //     //only half of the corn is available for harvest (cattle ranchers)
    //     if(plant[i].type ==="Corn"){
    //         for(let k=0; k < output/2 ; k++){
    //             seedObjects.push(plant[i])
    //         }  
    //     //push the plant the value in output key     
    //     }else {
    //         for(let j=0; j < output; j++){
    //             seedObjects.push(plant[i]);
    //         }
    //     }         
    // } 
    //how to refactor using map()????? 
    let seedObjects =  plant.map(  item => {
                const output = item.output;
        //only half of the corn is available for harvest (cattle ranchers)
        if(item.type ==="Corn"){
            for(let k=0; k < output/2 ; k++){
                return item
            }  
        //push the plant the value in output key     
        }else {
            for(let j=0; j < output; j++){
                return item
            }
        }
    })

    //return the filled array
    seedObjects.sort();
    return seedObjects;
}
