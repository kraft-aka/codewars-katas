// Translate number to the selected number system. If the number consists just of digits - return number, else - return string.

//   SysNums(5,2) // 101
//   SysNums(5,8) // 5
//   SysNums(250,2) // 11111010
//   SysNums(250,16) // "fa"

const sysNums = (n, sys) => {
  const res = n.toString(sys);
  return isNaN(res) ? res : +res;
};
