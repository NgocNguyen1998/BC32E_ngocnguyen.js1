/*----------- Bài tập 1 : Tính tiền lương------------ 

- input:
  + Tiền lương 1 ngày làm việc
  + Số ngày làm 
- xử lý:
  + Tạo biến tienLuong gắn giá trị là 100000
  + Tạo biến soNgay gắn giá trị là 5
  + Tạo biến tongTien gắn giá trị là 0
  + Công thức tính tổng tiền = Tiền lương 1 ngày * số ngày làm việc
- output:
  + Tổng tiền = ?
*/
console.log("Bài Tập 1")

var tienLuong = 100000;
var soNgay = 5;
var tongTien = 0;
tongTien = (tienLuong * soNgay).toLocaleString('vi-VN');
console.log("Tổng số tiền lương là: " + tongTien);

/*----------- Bài tập 2 : Tính giá trị trung bình------------ 

Giả sử: n là 1 số thực bất kỳ
- input:
  + Số thứ 1 là 1
  + Số thứ 2 là 3
  + Số thứ 3 là 3
  + Số thứ 4 là 4
  + Số thứ 5 là 5
- xử lý:
  + Tạo biến number1 gán giá trị là 1
  + Tạo biến number2 gán giá trị là 3
  + Tạo biến number3 gán giá trị là 3
  + Tạo biến number4 gán giá trị là 4
  + Tạo biến number5 gán giá trị là 5
  + Tạo biến giaTriTrungBinh là 0
  + Công Thức tính giá trị trung bình = Tổng của 5 số /5
- output:
  + Giá trị trung bình =?
  + Lấy 2 chữ số thập phân toFixe(2)
*/

console.log("Bài tập 2");

var number1 = 1;
var number2 = 3;
var number3 = 3;
var number4 = 4;
var number5 = 5;
var giaTriTrungBinh = 0;
giaTriTrungBinh = (number1+ number2+number3+number4+number5)/5;
console.log("Giá trị trung bình là: " + giaTriTrungBinh.toFixed(2));

/*----------- Bài tập 3 : Quy đổi tiền------------ 

- input:
  + 1USD = 23.500 VND
  + Người dùng nhập 2USD ( n = 2)
- xử lý:
  + Tạo biến number1 gán giá trị là 235000
  + Tạo biến number2 gán giá trị là 3
  + Tạo biến donViTien gán giá trị là 'VND'
  + Tạo biến soTienQuyDoi gan giá tri là 0
- output:
  + Số tiền quy đổi =?
*/
console.log("Bài tập 3");

var number1 = 23500;
var number2 = 3;
var donViTien = "VND";
var soTienQuyDoi = 0;
soTienQuyDoi = (number1 * number2).toLocaleString('vi-VN');
console.log("Số tiền quy đổi là: " + soTienQuyDoi + " VND" )

/*----------- Bài tập 4 : Tính diện tích, chu vi hình chữ nhật------------ 

- input:
  + Chiều dài = 12 
  + Chiều rộng = 3
- xử lý:
  + Tạo biến chieuDai gán giá trị là 12
  + Tạo biến chieuRong gán giá trị là 3
  + Tạo biến dienTich gán giá trị là 0
  + Tạo biến chuVi gán giá trị là 0
  + Công thức tính
     . Chu vi = ( dài + rộng)*2
     . Diện tích = dài*rộng
- output:
  + Chu vi, diện tích =?
*/
console.log("Bài tập 4");

var chieuDai = 12;
var chieuRong = 3;
var dienTich = 0;
var chuVi = 0;
chuVi = (chieuDai + chieuRong)*2;
dienTich = chieuDai * chieuRong;
console.log("Diện tích hình chữ nhật là: " + dienTich);
console.log("Chu vi hình chữ nhật là: " + chuVi);

/*----------- Bài tập 5 : Tính tổng 2 ký số------------ 


- input:
   + n = 12
   + n = 44
   + n = 83
- xử lý:
  + Tách lấy hàng chục => n/10
  + Tách lấy hàng đơn vị => n % 10 
  + Công thức tính:  Tổng = hàng chục + hàng đơn vị
- output:
  + Tổng =?
*/
console.log("Bài tập 5");
console.log("TH1: n = 12");
var n = 12;
var n1 = n/10;
var n2 = n%10;
var tong2KySo = n1 + n2;
console.log("Tổng là: " + tong2KySo.toFixed(0));
console.log("TH2: n = 44");
var n = 44;
var n1 = n/10;
var n2 = n%10;
var tong2KySo = n1 + n2;
console.log("Tổng là: " + tong2KySo.toFixed(0));
console.log("TH3: n = 83");
var n = 83;
var n1 = n/10;
var n2 = n%10;
var tong2KySo = n1 + n2;
console.log("Tổng là: " + tong2KySo.toFixed(0));