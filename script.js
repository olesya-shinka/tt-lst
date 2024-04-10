const numbers = [];
for (let i = 1; i <= 1000; i++) {
  numbers.push(i);
}

function serialize(arr) {
  return JSON.stringify(arr);
}

function deserialize(serialized) {
  return JSON.parse(serialized);
}

for (let number of numbers) {
  const serialized = serialize(number);
  const compressionRatio = serialized.length / (numbers.length * 2);
  console.log("Исходная строка:", number);
  console.log("Сжатая строка:", serialized);
  console.log("Коэффициент сжатия:", compressionRatio);
  console.log("-----------------------------------");
}
