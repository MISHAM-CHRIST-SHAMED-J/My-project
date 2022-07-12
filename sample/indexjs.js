// //reduce function
// var a=[1,8,3]
// var output=a.reduce((sum,ele)=>{
//     return sum+ele;
// },0)
// console.log(output)

// //normal function
// var arr=[1,9,8,7,8]
// var sum=0;
// arr.forEach((ele)=>{
//     sum=sum+ele;
// })
// console.log(sum)

// //Normal function
// let address={ 
//     area:'shanthi nager',
//     city:'chennai',
//     pin:852369,
//     fullAddress()
//     {
//         return `My addres is ${this.area}`
//     }
// }
// console.log(address.fullAddress());

// //Getter function
// let addresss={ 
//     area:'shanthi nager',
//     city:'chennai',
//     pin:852369,
//     get fullAddress()
//     {
//         return `My Pincode is ${this.pin}`
//     }
// }
// console.log(addresss.fullAddress);

// //update address in getter
// let address1={ 
//     area:'shanthi nager',
//     city:'chennai',
//     pin:852369,
//     get fullAddress()
//     {
//         return `My Address is ${this.area},${this.city},${this.pin}`
//     },
//     updatefullAddress(a,c,p)
//     {
//         this.area=a;
//         this.city=c;
//         this.pin=p;
//     }
// }
// address1.updatefullAddress('abn nager','trichy',654124)
// console.log(address1.fullAddress);

//Another method
let address45={ 
    area:'shanthi nager',
    city:'chennai',
    pin:852369,
    get fullAddress()
    {
        return `My Address is ${this.area},${this.city},${this.pin}`
    },
    updatefullAddress(address45)
    {
        let splittedarray = address45.split(" ")
        this.area=splittedarray[0]
        this.city=splittedarray[1]
        this.pin=splittedarray[2]
               
    }
}
address45.updatefullAddress('L-nager guiindy 852369')
console.log(address45.fullAddress)

// //setter method
// let address3={ 
//     area:'shanthi nager',
//     city:'chennai',
//     pin:852369,
//     get fullAddress()
//     {
//         return `My Address is ${this.area},${this.city},${this.pin}`
//     },
//     set updatefullAddress(address3)
//     {
//         let splittedarray = address3.split(" ")
//         this.area=splittedarray[0]
//         this.city=splittedarray[1]
//         this.pin=splittedarray[2]
               
//     }
// }
// address3.updatefullAddress='g-nager gundy 852369'
// console.log(address3.fullAddress)

