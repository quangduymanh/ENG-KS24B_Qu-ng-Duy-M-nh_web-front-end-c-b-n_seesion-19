let date = +prompt ("nhập tháng bạn muốn kiểm tra");
switch (date) {
    case 1 :
        document.write("tháng 1 có 31 ngày");
        break;
    case 2 :
        document.write("Tháng 2 có 28 hoặc 29 ngày năm nhuận");
        break;
    case 3 :
        document.write("Tháng 3 có 31 ngày");
        break;
    case 4 :
        document.write("Tháng 4 có 30 ngày");
        break;
    case 5 :
        document.write("Tháng 5 có 31 ngày");
        break;
    case 6 :
        document.write("Tháng 6 có 30 ngày");
        break;
    case 7 :
        document.write("Tháng 7 có 31 ngày");
        break;
    case 8 :
        document.write("Tháng 8 có 31 ngày");
        break;
    case 9 :
        document.write("Tháng 9 có 30 ngày");
        break;
    case 10 :
        document.write("Tháng 10 có 31 ngày");
        break;
    case 11 :
            document.write("Tháng 11 có 30 ngày");
            break;
    case 12 :
            document.write("Tháng 12 có 31 ngày");
            break;
    default:
        document.write("tháng không hợp lệ");
}