const numbers = [];
for (let i = 1; i <= 1000; i++) {
  numbers.push(i);
}

function serialize(data) {
  return JSON.stringify(data);
}

function deserialize(serialized) {
  return JSON.parse(serialized);
}

for (let number of numbers) {
  const serialized = serialize({ number }); 
  const deserialized = deserialize(serialized).number; 
  const compressionRatio = serialized.length / (numbers.length * 2);
  console.log("Исходное число:", number);
  console.log("Сжатая строка:", serialized);
  console.log("Десериализованная строка:", deserialized);
  console.log("Коэффициент сжатия:", compressionRatio);
  console.log("-----------------------------------");
}
