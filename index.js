// 1. Khai báo 4 biến đề bài yêu cầu ở ngoài vòng lặp
let currentTicketCode = "";
let isTicketValid = false;
let totalRevenue = 0;
let totalVisits = 0;

let menu = true;

while (menu) {
  console.log("Hệ thống thu ngân phòng khám Medlatec Clinic ");
  console.log("1. Nhập và kiểm chuẩn mã phiếu khám bệnh");
  console.log("2. Tính viện phí xét nghiệm");
  console.log("3. Thẩm định mã hồ sơ may mắn");
  console.log("0. Thoát chương trình");

  let choice = prompt("Vui lòng nhập lựa chọn của bạn (0 - 3):");

  if (choice === null || choice.trim() === "") {
    console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
    continue;
  }

  choice = choice.trim();

  switch (choice) {
    
    case "1": {
      currentTicketCode = "";
      isTicketValid = false;

      let input = prompt("Nhập mã phiếu khám bệnh:");

      if (input === null || input.trim() === "") {
        console.log("Lỗi: Chưa nhập mã phiếu");
        break;
      }

      let code = input.trim().toUpperCase();

     
      if (code.length < 6) {
        console.log("Lỗi: Độ dài nhỏ hơn 6 ký tự");
      } else if (!code.startsWith("MED-")) {
        console.log('Lỗi: Sai tiền tố "MED-"');
      } else if (code.includes(" ")) {
        console.log("Lỗi: Chứa khoảng trắng ở giữa");
      } else {
       
        currentTicketCode = code;
        isTicketValid = true;
        console.log("Mã phiếu hợp lệ: " + currentTicketCode);
      }
      break;
    }

   
    case "2": {
      if (!isTicketValid) {
        console.log("Vui lòng nhập mã phiếu hợp lệ ở Case 1 trước!");
        break;
      }

      let countInput = prompt("Nhập số lượng chỉ định (số nguyên > 0):");
      let priceInput = prompt("Nhập đơn giá (số nguyên > 0):");

      
      if (countInput === null || priceInput === null) {
        console.log("Đã hủy tính viện phí, giữ nguyên mã phiếu.");
        break;
      }

      let count = Number(countInput.trim());
      let price = Number(priceInput.trim());

      
      if (isNaN(count) || isNaN(price) || count <= 0 || price <= 0) {
        console.log("Lỗi: Số lượng và đơn giá phải là số lớn hơn 0!");
        break;
      }

      let baseCost = count * price;

      let discount = 0;
      if (count >= 4) {
        discount = Math.round(baseCost * 0.1);
      }

      let surcharge = Math.round((baseCost - discount) * 0.08);
      let total = (baseCost - discount) + surcharge;

      totalRevenue += total;
      totalVisits += 1;
      console.log("--- HÓA ĐƠN VIỆN PHÍ ---");
      console.log("Mã phiếu: " + currentTicketCode);
      console.log("Số chỉ định: " + count);
      console.log("Đơn giá: " + price.toLocaleString("vi-VN") + " VNĐ");
      console.log("Chi phí cơ sở: " + baseCost.toLocaleString("vi-VN") + " VNĐ");
      console.log("Tiền giảm giá: " + discount.toLocaleString("vi-VN") + " VNĐ");
      console.log("Phụ phí vật tư: " + surcharge.toLocaleString("vi-VN") + " VNĐ");
      console.log("Tổng thanh toán: " + total.toLocaleString("vi-VN") + " VNĐ");
      currentTicketCode = "";
      isTicketValid = false;
      break;
    }

  
    case "3": {
    }
    case "0": {
      console.log("   BÁO CÁO TỔNG KẾT CA TRỰC");

      if (totalVisits === 0) {
        console.log("Chưa phát sinh lượt khám nào trong ca.");
      } else {
        let avg = Math.round(totalRevenue / totalVisits);
        console.log("Tổng số lượt khám: " + totalVisits);
        console.log("Tổng doanh thu: " + totalRevenue.toLocaleString("vi-VN") + " VNĐ");
        console.log("Doanh thu trung bình/lượt: " + avg.toLocaleString("vi-VN") + " VNĐ");
      }

      console.log("Tạm biệt!");
      isRunning = false;
      break;
    }

    default: {
      console.log("Không hợp lệ vui lòng nhập từ 0 đến 3!");
      break;
    }
  }
}