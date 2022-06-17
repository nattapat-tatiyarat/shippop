// 1.2 ) ถ้าหากต้องการ copy “array of object” ใน Nodejs มีวิธีการใดบ้าง ยกตัวอย่างมาอย่างน้อย 1 วิธี

const original_array = [
  {
    name: "Shippop1",
    year: 2021,
  },
  {
    name: "Shippop2",
    year: 2022,
  },
];

function by_jsonstringify(original_array) {
  return JSON.parse(JSON.stringify(original_array));
}

function by_map(original_array) {
  return original_array.map((data) => ({
    name: data.name,
    year: data.year,
  }));
}

console.log("JSON.stringify");
console.log(by_jsonstringify(original_array));
console.log("Map");
console.log(by_map(original_array));
