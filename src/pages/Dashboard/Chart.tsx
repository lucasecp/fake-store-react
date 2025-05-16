import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registrando os componentes que o Chart.js vai usar
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);


const opt = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
    },
    tooltip: {
        enabled: true,
    },
},
};

export default function ChartProducts({values}) {
    console.log(values)
    const data = {
      labels: values?.map(val => val.title),
      datasets: [
        {
          label: 'Products Price',
          data: values? values?.map(val=>val.priceNumber) :[],
          backgroundColor: ['#1c398e ', 'oklch(64.5% 0.246 16.439)', '#1e2939', '#eeff00'],
          borderRadius: 5,
        },
      ],
    };
    return <Bar data={data} options={opt} />;
}