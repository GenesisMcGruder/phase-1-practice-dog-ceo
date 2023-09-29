//const dogBreeds = document.querySelector('#dog-breeds')

function getBreeds() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then((res)=> res.json())
    .then(res => {
        const imgCont = document.querySelector('#dog-image-container')
        res.message.forEach(url => {
            const img = document.createElement("img")
            img.src = url
            imgCont.append(img)
        })
    })
}
getBreeds()

 let dogKeys = []
function breedsDef() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then((res)=> res.json())
    .then((res =>{
         dogKeys = Object.keys(res.message)
        //const ul = document.querySelector('#dog-breeds')
        addBreedNamesToDom(dogKeys)
        // dogKeys.map(dogKeys => {
        //     const li = document.createElement('li')
        //     li.textContent =  dogKeys
        //     li.addEventListener("click", () =>{
        //         li.style.color = 'red' ; 
        //     })
        //     ul.append(li)
        // })
        }))
}

function addBreedNamesToDom(dogKeys) {
    const ul = document.querySelector('#dog-breeds')
    dogKeys.map(dogKeys => {
        const li = document.createElement('li')
        li.textContent =  dogKeys
        li.addEventListener("click", () =>{
            li.style.color = 'red' ; 
        })
        ul.append(li)
})}

breedsDef()

document.addEventListener("change", event => {
    if(event.target.matches('#breed-dropdown')){
        const ul = document.querySelector('#dog-breeds')
        ul.innerHTML = ""
       const filteredKeys = dogKeys.filter(dogKey => dogKey[0] === event.target.value)
       addBreedNamesToDom(filteredKeys)
    }
})
