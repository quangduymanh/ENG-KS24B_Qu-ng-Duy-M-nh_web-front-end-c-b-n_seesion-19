let str = prompt("Nhập chuỗi cần kiểm tra:");
if (/\s/.test(str)) {
    document.write("Chuỗi có chứa dấu cách.");
} else {
    document.write("Chuỗi không chứa dấu cách.");
}