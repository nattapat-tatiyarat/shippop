// 1.1 ) เขียน function แสดงค่าทาง console โดย function รับ parameter 2 ตัว ได้แก่
// - firstName: String
// - lastName: String
// - ผลลัพธ์ที่ได้ อยู่ในรูปแบบ
//     “Hello Shippop, My name is {{firstName}} {{lastName}}”
// - เงื่อนไขเพิ่มเติม
//     - ถ้า firstName เท่ากับ คำว่า “Shippop” แสดง "Best Online Shipping Platform"

const prompt = require("prompt-sync")();

const firstName = prompt("First Name: ");
if (firstName == "Shippop") {
  console.log("Best Online Shipping Platform");
} else {
  const lastName = prompt("Last Name: ");
  console.log(`Hello Shippop, My name is ${firstName} ${lastName}`);
}
