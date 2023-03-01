// 1
function tinhTongSoDuong() {
    const inputNumbers = document.getElementById("inputNumbers").value;
    const arr = inputNumbers.split(",").map(Number);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    const result = document.getElementById("result");
    result.innerText = `Tổng các số dương trong mảng là ${sum}.`;
  }
  