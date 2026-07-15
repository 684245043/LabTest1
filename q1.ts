let cupSize:string[] = ["S","M","L"];
let CupPrice: number = 100;
let ownCup: boolean = true;

function AllCup(CupPrice:number): void {

if (CupPrice === 60){
    console.log("S");
}else if (CupPrice === 80){
    console.log("M");   

}else ( CupPrice === 100) 
    console.log("L");
}
    if (ownCup === true){
    console.log(` ได้รับส่วนรด ${CupPrice*5/100} บาท`);
}

console.log(`กาแฟราคา ${CupPrice} บาท`);