let kors = [90, 80, 70, 99, 65, 70];

function getScore(arr) {
  for (let i = 0; i < arr.length; i++) {
    process.stdout.write(`${arr[i]} `);
  }
  process.stderr.write('\n');
}

getScore(kors);

function getAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return avg;
}

console.log(getAvg(kors));
function cntAboveAvg(arr) {
  let cnt = 0;
  let avg = getAvg(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > avg) cnt++;
  }
  return cnt;
}
console.log(cntAboveAvg(kors));
