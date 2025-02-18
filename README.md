<
 # Indian Agriculture Data Visualization 🌿
 
## Project Overview

This project visualizes agricultural data for India, utilizing TypeScript, Vite, Mantine, and Apache ECharts. It focuses on displaying key statistics related to crop production, and features a table and a bar chart to display data. Additionally, the app supports toggling between light and dark modes.

### Technologies Used:
- **TypeScript** 
- **Vite Min Template** for fast development and TypeScript setup.
- **Mantine v7** for building UI components (Table and Button).
- **Apache ECharts** for data visualization (Bar Chart).
- **TailwindCSS** for styling.
- **npm** for managing dependencies.


## Features
- A table showing the crop with maximum and minimum production in each year.
- A bar chart displaying the average crop production for each crop.
- A toggle button to switch between light and dark color schemes
  
## Project Structure:
### 1. Table Component
- Displays **Crop with Maximum Production** and **Crop with Minimum Production** for each year.
- Data from the Indian Agriculture dataset are aggregated and shown in a table using **Mantine v7**.

 ##Dataset
The dataset is provided by the National Data and Analytics Platform, NITI Aayog, which includes data on crop production in India from 1950 to 2020.
  
### 2. Bar Chart Component
- A bar chart that shows the **average crop production** for each crop using **Apache ECharts**.
- Crop names will be plotted on the x-axis, and the average production on the y-axis.

### 3. Toggle Color Scheme Button
- There is a button on the page that allows toggling between **light** and **dark** modes.

 ## Screenshots:
 ![image](https://github.com/user-attachments/assets/ab586f23-664a-4828-89ef-96ba11a9dd56)
 
 ![image](https://github.com/user-attachments/assets/66b50494-4abb-4122-9a8f-8cccf54063d7)
 

## Setup Instructions

### Prerequisites
- Make sure you have **Node.js** and **npm** installed on your system.
- You can download Node.js from [here](https://nodejs.org/).

## Project Setup
To run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/sitambhra/indian-agriculture-visualization.git
```
2. Install dependencies:

```bash
npm install
```
3. Run the development server:
 ```bash
   npm run dev
```
Open the browser, and the app will be rendered automatically.
