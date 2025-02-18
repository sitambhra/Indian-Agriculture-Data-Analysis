import '@mantine/core/styles.css';
import { processTableData, processChartData } from './utils/dataProcessing';
import { CropData } from './types/agriculture';
import { useEffect, useState } from 'react';
import { BarChart } from './components/BarChart';
import { Container,Button,Space, Title, MantineProvider, useMantineColorScheme } from '@mantine/core';
import { Sun, Moon,ChartLine, Database } from "lucide-react";
import { DataTable } from './components/DataTable';

function ColorSchemeToggle() {

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Button onClick={() => { toggleColorScheme() }}
      variant='outline'
      leftSection={colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}>
      {colorScheme === 'dark' ? 'Light mode' : 'Dark mode'}
    </Button>
  )

}


function App() {
  const [data, setData] = useState<CropData[]>([]);

  useEffect(() => {
    // Fetch the data from the public folder
    fetch('/data.json')
      .then((response) => response.json())  // Parse the JSON data
      .then((data) => {
        setData(data);  // Set the data in state
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const tableData = data.length > 0 ? processTableData(data) : [];
  const chartData = data.length > 0 ? processChartData(data) : [];

  return(
    <MantineProvider>
    <>
    <div className="flex justify-between items-center px-4 py-2 mb-8 ">
         <Title order={1}> Indian Agriculture Data Analysis 🌿</Title>
         <ColorSchemeToggle />

      </div>

    <Container>
   

      <div className="flex">
      <ChartLine color="#05a844" size={24}/> 
      <Title order={2} mb="md">Average Crop Production</Title>

      </div>
      <div className="h-[400px]">
        <BarChart data={chartData} />
      </div>
      <Space h="xl" />
<div className="flex">
<Database color='#05a844' size={24} />
<Title order={2} mb="md">Production Analysis Table </Title>

</div>
      <DataTable data={tableData} />

    </Container>

    </>
  </MantineProvider>
  );
}

export default App
