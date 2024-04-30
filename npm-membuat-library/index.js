export const sayHello = (name) =>{
    return `hello ${name}`
}

export const sum = (number) =>{
    let total = 0
    for(const value of number){
        total += value
    }
    return total
}