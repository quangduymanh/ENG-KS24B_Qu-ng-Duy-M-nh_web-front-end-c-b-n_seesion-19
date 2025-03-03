let result ="javascript" + 5; 
// kết quả : javascript5. Tại vì nó là phép nối chuỗi
let result ="javascript" - 1;
// kết quả : NaN. Tại vì javascript là chuỗi mà 1 là số nên phép toán sai
let result = "3" + 2;
//kết qua : 32. Do 2 được chuyển thành chuỗi "2"
let result = "5" - 4;
//ket qua : 1. Do 4 được chuyển thành chuỗi "4"
let result =  isNaN( “123”);
//ket qua : false. Do "123" là chuỗi nhưng có thể chuyển thành số 123, nên không phải NaN
let result = isNaN(“hello”);
// ket qua : true. Do hello không thể chuyển thành số
let result = Number.isNaN("123");
// ket qua : false. Do "123" là chuỗi, không phải NaN
let result = Number.isNaN(NaN);
// ket qua : true. Do NaN chính là NaN
