// This DataTable component is responsible for rendering the table.

// It receives data as a prop, which is the transformed data (processed data that includes the crop with max and min production per year).


import { Table, Paper, ScrollArea } from '@mantine/core';
import { AggregatedData } from '../types/agriculture';

interface DataTableProps {
  data: AggregatedData[];
}

export function DataTable({ data }: DataTableProps) {
  return (

    <Paper p="md" radius="md" withBorder>
       <ScrollArea style={{ height: 400 }}>

      <Table striped highlightOnHover withTableBorder withColumnBorders stickyHeader >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Year</Table.Th>
            <Table.Th>Crop with Maximum Production</Table.Th>
            <Table.Th>Crop with Minimum Production</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((row) => (
            <Table.Tr key={row.year}>
              <Table.Td>{row.year}</Table.Td>
              <Table.Td>{row.maxCrop}</Table.Td>
              <Table.Td>{row.minCrop}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      </ScrollArea>

    </Paper>
  );
}