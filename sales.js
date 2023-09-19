function calculateTotalSales(salesData) {
  let totalSales = 0;
  for (let i = 0; i < salesData.length; i++) {
    totalSales += salesData[i];
  }
  return totalSales;
}

// Example usage:

const salesData = [100, 200, 300, 400, 500];
const totalSales = calculateTotalSales(salesData);

console.log(totalSales); // 1500
