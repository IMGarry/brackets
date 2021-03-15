module.exports = function check(str, bracketsConfig) {
  const arr = bracketsConfig.map((it) => it.join(''));
  for (let i = 0; i <= arr.length; i++) {
    if (str.indexOf(arr[i]) > -1) {
      str = str.replace(arr[i], '');
      i = -1;
    }
  }
  return !str.length;
}
