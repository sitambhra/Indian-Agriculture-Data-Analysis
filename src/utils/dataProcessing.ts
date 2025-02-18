// // This file contains the logic that transforms the raw data into the format needed by the table.

// // Updated processTableData for new format
// import { CropData, AggregatedData} from '../types/agriculture';
// import { CropAverage } from '../types/agriculture';  // Adjust the path if needed

// export function processTableData(data: CropData[]): AggregatedData[] {
//     const yearlyData = new Map<number, CropData[]>();
  
//     // Group data by year
//     data.forEach(entry => {
//         const year = parseInt(entry.Year.split(",")[1].trim()); // Convert the year to a number

//         if (!yearlyData.has(year)) {
//         yearlyData.set(year, []);
//       }
//       yearlyData.get(year)?.push(entry);
//     });
  
//     // Process each year
//     return Array.from(yearlyData.entries()).map(([year, crops]) => {
//       const maxCrop = crops.reduce((max, current) =>
//         current["Crop Production (UOM:t(Tonnes))"] > max["Crop Production (UOM:t(Tonnes))"] ? current : max
//       );
      
//       const minCrop = crops.reduce((min, current) =>
//         current["Crop Production (UOM:t(Tonnes))"] < min["Crop Production (UOM:t(Tonnes))"] ? current : min
//       );
  
//       return {
//         year,
//         maxCrop: maxCrop["Crop Name"],
//         minCrop: minCrop["Crop Name"]
//       };
//     }).sort((a, b) => a.year - b.year); // Sorting by year directly as numbe
//    }
//    export function processChartData(data: CropData[]): CropAverage[] {
//     const cropData = new Map<string, number[]>();
  
//     // Group productions by crop
//     data.forEach(entry => {
//       if (!cropData.has(entry["Crop Name"])) {
//         cropData.set(entry["Crop Name"], []);
//       }
//       cropData.get(entry["Crop Name"])?.push(entry["Crop Production (UOM:t(Tonnes))"]);
//     });
  
//     // Calculate averages
//     return Array.from(cropData.entries()).map(([crop, productions]) => ({
//       crop,
//       averageProduction: productions.reduce((sum, val) => sum + val, 0) / productions.length
//     })).sort((a, b) => b.averageProduction - a.averageProduction);
//   }
  // This file contains the logic that transforms the raw data into the format needed by the table.

// Updated processTableData for new format
import { CropData, AggregatedData } from '../types/agriculture';
import { CropAverage } from '../types/agriculture'; // Adjust the path if needed

export function processTableData(data: CropData[]): AggregatedData[] {
    const yearlyData = new Map<number, CropData[]>();
  
    // Group data by year
    data.forEach(entry => {
        const year = parseInt(entry.Year.split(",")[1].trim()); // Convert the year to a number

        if (!yearlyData.has(year)) {
            yearlyData.set(year, []);
        }
        yearlyData.get(year)?.push(entry);
    });
  
    // Process each year
    return Array.from(yearlyData.entries()).map(([year, crops]) => {
      const maxCrop = crops.reduce((max, current) => {
        const maxProduction = max["Crop Production (UOM:t(Tonnes))"] ?? 0; // Treat missing values as 0
        const currentProduction = current["Crop Production (UOM:t(Tonnes))"] ?? 0; // Treat missing values as 0
        return currentProduction > maxProduction ? current : max;
      });
      
      const minCrop = crops.reduce((min, current) => {
        const minProduction = min["Crop Production (UOM:t(Tonnes))"] ?? 0; // Treat missing values as 0
        const currentProduction = current["Crop Production (UOM:t(Tonnes))"] ?? 0; // Treat missing values as 0
        return currentProduction < minProduction ? current : min;
      });
  
      return {
        year,
        maxCrop: maxCrop["Crop Name"],
        minCrop: minCrop["Crop Name"]
      };
    }).sort((a, b) => a.year - b.year); // Sorting by year directly as number
}

export function processChartData(data: CropData[]): CropAverage[] {
    const cropData = new Map<string, number[]>();
  
    // Group productions by crop
    data.forEach(entry => {
        const cropProduction = entry["Crop Production (UOM:t(Tonnes))"] ?? 0; // Treat missing values as 0
        if (!cropData.has(entry["Crop Name"])) {
            cropData.set(entry["Crop Name"], []);
        }
        cropData.get(entry["Crop Name"])?.push(cropProduction);
    });
  
    // Calculate averages
    return Array.from(cropData.entries()).map(([crop, productions]) => ({
      crop,
      averageProduction: productions.reduce((sum, val) => sum + val, 0) / productions.length
    })).sort((a, b) => b.averageProduction - a.averageProduction);
}

  
  