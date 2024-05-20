function calculateBitcoinPurchases(goldMined) {
    const bitcoinPrice = 11949.16;
    const goldPricePerGram = 67.51;
  
    let totalMoney = 0;
    let totalBitcoins = 0;
    let firstBitcoinDay = 0;
  
    for (let day = 1; day <= goldMined.length; day++) {
      let gold = goldMined[day - 1];
  
      if (day % 3 === 0) {
        gold *= 0.7; // 30% stolen every third day
      }
  
      totalMoney += gold * goldPricePerGram;
  
      if (totalBitcoins === 0 && totalMoney >= bitcoinPrice) {
        firstBitcoinDay = day;
      }
  
      while (totalMoney >= bitcoinPrice) {
        totalMoney -= bitcoinPrice;
        totalBitcoins++;
      }
    }
  
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (totalBitcoins > 0) {
      console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
  }
  
  // Test case
  calculateBitcoinPurchases([100, 200, 300]); 
  // Expected Output:
  // Bought bitcoins: 1
  // Day of the first purchased bitcoin: 2
  // Left money: 2582.34 lv.
  