let currentResevationCode = "";
let isReservationValid = false;
let totalRevenue = 0;
let totalCheckouts = 0;
let menu = true;

while(menu){
    console.log("Hệ thống lễ tân khách sạn SUNRISE HOTEL");
    console.log("1. Nhập và kiểm chuẩn mã đặt phòng");
    console.log("2. Tính tiền phòng lưu trú");
    console.log("3. Thẩm định mã thẻ may mắn");
    console.log("0. Thoát chương trình");
    let choice = prompt("Vui long nhap lua chon cua ban (0 - 3) ");
    switch (choice){
        case "1":
            currentResevationCode = "";
            isReservationValid = false;

            let id = prompt("Nhap ma dat phong").trim().toUpperCase();
            if (id === null){
                alert("Chua nhap ma dat phong");
            }
            if (id.length < 6){
                console.log("Độ dài tối thiếu 6 ký tự");
            }else if (id.startsWith("HTL-")){
                console.log("Bắt đầu bằng 'HTL-'");
            }else if (id.includes(" ")){
                console.log("mã đặt phòng không chứa khoảng cách")
            }
            currentResevationCode = id;
            isReservationValid = true
            // alert("Mã đặt phòng hợp lệ");
            break;
        
        case "2":
            if (isReservationValid===false){
                console.log("Yêu cầu chọn Case 1 trước")
            }

            nightCount = 0;
            pricePerNight = 0;
            cancel = false;
            while (true){
                let night_of_number = prompt("Nhập số đêm ").trim();
                if (night_of_number>0){
                    console.log("Số đêm phải là số nguyên lớn hơn 0");

                }
                nightCount = Number(night_of_number);
            }
            discountAmount = 0;
            costBasis = nightCount * pricePerNight
            if (nightCount >=4){
                costBasis * 0.1;
                discountAmount = costBasis;
            }
            service_fee = Math.round(costBasis - discountAmount) * 0.08
            total_payment = (costBasis - discountAmount) + service_fee
            totalCheckouts +=1;

            console.log("Đơn giá: ", );
            console.log("Chi phí cơ sở: "+ costBasis);
            console.log("Giảm giá: "+discountAmount);
            console.log("Phụ phí: "+service_fee);
            console.log("Tổng thanh toán: "+total_payment);

            break;

        case "3":
            
            break;
        
        case "0":
            console.log("Thoat thanh cong");
            break;

        default:
            console.log("Lựa chọn không hợp lệ");




    }
}