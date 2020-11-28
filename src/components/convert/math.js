let delta = () =>{
let value = 0.71111 //new converted
let converted= (0.81111*10)//converted
let amount = 1*10 // base

return parseFloat((((value*amount) - (converted))/ (converted)*100).toFixed(5))
}

console.log(delta())