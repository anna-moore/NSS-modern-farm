// function renders individual plant objects as HTML translator
const food = (harvest )=>{

    return `<section class="plant"> ${harvest.icon} </section>`
}

//harvest is the array of harvested food items 
export const Catalog= (harvest) =>{
    //get reference to the <section class="container"> element
    const contentElement = document.querySelector(".container")

    for(let item of harvest){
        const foodHTML = food(item)
        contentElement.innerHTML +=foodHTML
        
    }

}


