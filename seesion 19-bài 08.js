let date = +prompt ("nhập tháng bạn muốn kiểm tra");
switch (date) {
    case 1, 2, 3 :
        document.write("mùa xuân");
        break;
    // case 2 :
    //     document.write("mùa xuân");
    //     break;
    // case 3 :
    //     document.write("mùa xuân");
    //     break;
    case 4, 5, 6 :
        document.write("mùa hạ");
        break;
    // case 5 :
    //     document.write("Tmùa hạ");
    //     break;
    // case 6 :
    //     document.write("mùa hạ");
    //     break;
    case 7, 8, 9 :
        document.write("mùa thu");
        break;
    // case 8 :
    //     document.write("mùa thu");
    //     break;
    // case 9 :
    //     document.write("mùa thu");
    //     break;
    case 10, 11, 12 :
        document.write("mùa dông");
        break;
    // case 11 :
    //         document.write("mùa dông");
    //         break;
    // case 12 :
    //         document.write("mùa dông");
    //         break;
    default:
        document.write("tháng không hợp lệ");
}