// function renders individual plant objects as HTML translator
const food = (harvest )=>{

    return `<section class="plant"> ${harvest.icon} </section>`
}

//harvest is the array of harvested food items 
export const Catalog= (harvest) =>{
    //get reference to the <section class="container"> element
    const contentElement = document.querySelector(".container")

    //refactor with map() instead of for .. of
    contentElement.innerHTML += 
        // `<article class= "harvest">
         ` ${harvest.map(item => food(item)).join("")}`
    //     </article>`


}


