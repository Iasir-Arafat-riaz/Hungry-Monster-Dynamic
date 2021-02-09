const clickHere = () => {
    const search = document.getElementById("search").value
    
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    
        .then((response) => response.json())
        .then((data) => foodCategories(data.categories))

    const foodCategories = category => {
        const div = document.getElementById("result")
        category.forEach((food) => {
            const newFood = food.strCategory;

            const foodDiv = document.createElement("div")
            foodDiv.className = "foods"
            const foodInfo = `
                          
                          <img src="${food.strCategoryThumb}"></img> 
                          <h1>${newFood}</h1>     
             `
            foodDiv.innerHTML = foodInfo
            div.appendChild(foodDiv)



        })

    }

}