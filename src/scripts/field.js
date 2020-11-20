//store seed ready for planting 
const growingPlants= [];

//Check if seed is corn, pushing two object, if not push seed object
export const addPlant = (seed) =>{
    if (Array.isArray(seed) === true){
        for(const seedObject of seed){
            growingPlants.push(seedObject);
        }
    } else{
        growingPlants.push(seed);
    }   
    return growingPlants;
}

//export copy of growingPlants array
export const usePlants = () =>{
    return growingPlants.slice();

}