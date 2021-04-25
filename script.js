var items = [];
var galeria = document.getElementsByClassName("flex")[0]
var grid = document.getElementsByClassName('grid1')[0]

function insertGaleria(tag){
let number = 0

for(let x=1;x <= 3;x++){
number = x
items.push(`<div><img src="./img/lobo${number}.jpg" alt=''><p>Teste</p></img></div>`)

}

itemsJoin= items.join('')
tag.innerHTML=itemsJoin

}


insertGaleria(galeria)
insertGaleria(galeria)

insertGaleria(grid)



