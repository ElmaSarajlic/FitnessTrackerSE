import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { workoutLogsList } from '../../constants';
import TextField from '@mui/material/TextField';
import { Box, Container, Paper, Typography } from '@mui/material';

const WorkoutWeightGraph = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [data, setData] = useState<{ date: string; totalWeight: number }[]>([]);

  useEffect(() => {
    const sortedLogs = [...workoutLogsList].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const relevantLogs = sortedLogs.filter(log => {
      if (!startDate || !endDate) return true;
      const logDate = new Date(log.date);
      return logDate >= startDate && logDate <= endDate;
    }).slice(0, 5);

    const chartData = relevantLogs.map(log => {
      const totalWeight = log.exercises.reduce((acc, curr) => acc + curr.weight, 0);
      return { date: log.date, totalWeight };
    });

    setData(chartData);
  }, [startDate, endDate]);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant='h5' sx={{ marginBottom: 2 }}>Total Weight Lifted</Typography>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalWeight" fill="#1769aa" barSize={35} />
      </BarChart>

      <Container sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <TextField
          label="Start Date"
          type="date"
          onChange={(e) => setStartDate(e.target.value ? new Date(e.target.value) : null)}
          InputLabelProps={{
            shrink: true
          }}
          variant='filled'
        />
        <TextField
          label="End Date"
          type="date"
          onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
          InputLabelProps={{
            shrink: true
          }}
          variant='filled'
        />
      </Container>
    </Box>
  );
};

export default WorkoutWeightGraph;
