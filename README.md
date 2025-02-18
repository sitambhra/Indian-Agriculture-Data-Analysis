  # Indian Agriculture Data Visualization

## Project Overview

This project visualizes agricultural data for India, utilizing TypeScript, Vite, Mantine, and Apache ECharts. It focuses on displaying key statistics related to crop production, and features a table and a bar chart to display data. Additionally, the app supports toggling between light and dark modes.

### Technologies Used:
- **TypeScript** 
- **Vite Min Template** for fast development and TypeScript setup.
- **Mantine v7** for building UI components (Table and Button).
- **Apache ECharts** for data visualization (Bar Chart).
- **TailwindCSS** for styling.
- **npm** for managing dependencies.

 
Project Structure
Table: Displays the crop with maximum and minimum production for each year from 1950 to 2020.
Bar Chart: Visualizes the average crop production for each crop from the dataset.

Features
A table showing the crop with maximum and minimum production in each year.
A bar chart displaying the average crop production for each crop.
A toggle button to switch between light and dark color schemes
## Task Breakdown:
### 1. Table Component
- Displays **Crop with Maximum Production** and **Crop with Minimum Production** for each year.
- Data from the Indian Agriculture dataset will be aggregated and shown in a table using **Mantine v7**.
  
### 2. Bar Chart Component
- A bar chart that shows the **average crop production** for each crop using **Apache ECharts**.
- Crop names will be plotted on the x-axis, and the average production on the y-axis.

### 3. Toggle Color Scheme Button
- There is a button on the page that allows toggling between **light** and **dark** modes.

### 4. Deployment
- The app is deployed on a free hosting platform to showcase the working of the table and chart.

## Setup Instructions

### Prerequisites
- Make sure you have **Node.js** and **npm** installed on your system.
- You can download Node.js from [here](https://nodejs.org/).

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/indian-agriculture-visualization.git
