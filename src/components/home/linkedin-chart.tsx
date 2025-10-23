'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  {
    name: 'Connections\nSent',
    value: 151,
    percentage: '100%',
    color: '#8B5CF6'
  },
  {
    name: 'Connections\nAccepted',
    value: 95,
    percentage: '62.9%',
    color: '#3B82F6'
  },
  {
    name: 'Messages\nSent',
    value: 94,
    percentage: '62.3%',
    color: '#06B6D4'
  },
  {
    name: 'Message\nReplies',
    value: 58,
    percentage: '61.7%',
    color: '#10B981'
  }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-semibold text-gray-900">{data.name.replace('\n', ' ')}</p>
        <p className="text-2xl font-bold" style={{ color: data.color }}>
          {data.value}
        </p>
        <p className="text-sm text-gray-600">
          {data.percentage} of total
        </p>
      </div>
    );
  }
  return null;
};

export default function LinkedInChart() {
  return (
    <div className="w-full h-48">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="name" 
            tick={false}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.6)' }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            domain={[0, 160]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="value" 
            radius={[4, 4, 0, 0]}
            animationDuration={2000}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
