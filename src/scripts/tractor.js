//import all seed functions
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower} from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'

//import addPlants from field.js
import { addPlant } from './field.js'

//take plan, create seed, place seed in soil
export const plantSeeds = (plan) =>{
    for(let i =0; i< plan.length; i++ ){
        for(let j = 0; j < plan[i].length; j++){
            if(plan[i][j]=== "Asparagus"){
                addPlant(createAsparagus());
            }else if (plan[i][j] === "Corn" ){
                addPlant(createCorn());
            }else if (plan[i][j] === "Potato" ){
                addPlant(createPotato());
            }else if (plan[i][j] === "Soybean" ){
                addPlant(createSoybean());
            }else if (plan[i][j] === "Sunflower" ){
                addPlant(createSunflower());
            }else if (plan[i][j] === "Wheat" ){
                addPlant(createWheat());
            }
        }
    }
}