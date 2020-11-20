import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"

const yearlyPlan= createPlan();
console.log(yearlyPlan);


const asparagusSeed = createAsparagus();
console.log(asparagusSeed);