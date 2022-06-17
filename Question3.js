// 1.3 ) First Class Function คืออะไร กรุณาแสดงตัวอย่างพร้อมคำอธิบาย

function shippop() {
  return "Shippop";
}
function concat(name, description) {
  console.log(name() + description);
}
concat(shippop, " is the best Online Shipping Platform!");

// First-class Function คือ function ที่ทำหน้าที่และมีคุณสมบัติเหมือน variable ทั่วไป
// เช่น ส่ง parameter => shippop ซึ่งเป็น function ไปยัง function concat()
