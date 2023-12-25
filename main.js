let array = [267, 33, 68, 63, 11, 3, 885, 327]

function bubblesort(array){
    let length = array.length
    for(let i= 0; i< length; i++){
        for(let j= 0; j< length; j++){
            if(array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
        console.log('iteration ${i + 1}:', array)
    }
    return array
}
console.log(bubblesort(array))
