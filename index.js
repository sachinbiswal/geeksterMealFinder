const text=document.getElementById("text")
const maincontainerlower=document.getElementById("maincontainerlower")

async function search(params) {
    maincontainerlower.innerHTML=""
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text.value}`)
    // console.log(response);
    const data=await response.json()
    console.log(data);
    data.meals.map((ele)=>{
        // console.log(ele)
        var image=ele.strMealThumb
        maincontainerlower.innerHTML+=`
        <div class="card">
            <img src="${image}" alt="" width="100%" height="100%">
        </div>
        `

     })

}