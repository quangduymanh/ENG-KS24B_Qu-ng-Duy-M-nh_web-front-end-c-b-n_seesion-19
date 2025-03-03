let rate = 23000;
let option = prompt("Bạn muốn chuyển đổi:\n1.VND → USD\n2.USD → VND\nNhập 1 hoặc 2:");
switch (option) {
    case "1": {
        let vnd = parseFloat(prompt("Nhập số tiền VND: "));
        if (!isNaN(vnd) && vnd >= 0) {
            let usd = vnd / rate;
            document.write(`${vnd.toLocaleString()} VND = ${usd.toFixed(2)} USD`);
        } else {
            document.write("Vui lòng nhập số tiền hợp lệ");
        }
        break;
    }
    case "2": {
        let usd = parseFloat(prompt("Nhập số tiền USD: "));
        if (!isNaN(usd) && usd >= 0) {
            let vnd = usd * rate;
            document.write(`${usd.toFixed(2)} USD = ${vnd.toLocaleString()} VND`);
        } else {
            document.write("Vui lòng nhập số tiền hợp lệ");
        }
        break;
    }
    default:
        document.write("Vui lòng nhập 1 hoặc 2");
}