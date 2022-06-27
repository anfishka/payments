const ownFee = 0.01; // 1% from 100%
const creditFee = 0.04; // 4%

let sum = 3500;
let balance = 700;
let limit = 3000;
let fee = 0;

if(balance > 0 && sum <= balance){
    fee = sum * ownFee;

}else if(balance <= 0 ){
    fee = sum * creditFee;
}else{
    let diff = sum - balance;
    fee = (diff  * creditFee) + (balance * ownFee);
}
    console.log(`Fee:${fee} UAN`);

    let money = limit + balance;

    if((sum + fee) <= money){
        console.log("ok");
    }else{
        console.log("Cancel");
    }
