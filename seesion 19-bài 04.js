let number = +prompt ("nhập số bạn muốn kiểm tra nó có chia hết cho 5");
if (number % 5 === 0 && number % 3 === 0){
    document.write(`${number} số này chia hết cho cả 5 và 3`);
}else{
    document.write(`${number} số này không chia hết cho cả 5 và 3`);
}