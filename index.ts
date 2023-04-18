function countAppear(numbers:number[],value:number) {
    let count=0
    numbers.forEach((element)=>{
        if(element===value){
            count++
        }
    })
    return count
}
let numbers1=[1,1,1,1,2,3,4,5,6,6,6,4,2,2,5]


console.log(countAppear(numbers1,1))