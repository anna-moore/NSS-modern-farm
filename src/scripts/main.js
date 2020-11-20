import { addPlant, usePlant } from './field.js';
import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'

//test harvest plan
const yearlyPlan= createPlan();
console.log(yearlyPlan);

//test creating the seeds
const asparagusSeed = createAsparagus();
console.log(asparagusSeed);

//test tilling the fiels
let seed = [];
seed = createAsparagus();
const test = addPlant(seed);
const test2 = usePlant();
console.log(test, test2);