// The Coupon Code

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const d1 = new Date(currentDate).toISOString().split("T")[0];
  const d2 = new Date(expirationDate).toISOString().split("T")[0];
  return enteredCode === correctCode && d2 >= d1;
}
