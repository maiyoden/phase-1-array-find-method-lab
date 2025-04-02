// code your solut
function superbowlWin(record) {
    // Use the find() method to locate the first object with a result of "W"
    const winRecord = record.find(game => game.result === "W");
    
    // If a win is found, return the year; otherwise, return undefined
    return winRecord ? winRecord.year : undefined;
  }
  
  // Example usage:
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // Add more records as needed
  ];
  
  console.log(superbowlWin(record)); // Output: "2015"