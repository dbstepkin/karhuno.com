'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  {
    name: 'Emails\nSent',
    value: 82,
    percentage: '100%',
    color: '#3B82F6'
  },
  {
    name: 'Positive\nReplies',
    value: 20,
    percentage: '24.4%',
    color: '#10B981'
  },
  {
    name: 'Delivery\nFailures',
    value: 0,
    displayValue: 0,
    percentage: '0%',
    color: '#EF4444',
    isZero: true
  },
  {
    name: 'Spam Score',
    value: 0,
    displayValue: 0,
    percentage: '0%',
    color: '#F59E0B',
    isZero: true
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

export default function ColdEmailChart() {
  return (
    <div className="w-full h-48 relative">
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
            domain={[0, 90]}
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
      
      {/* Zero value lines */}
      <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none">
        <div className="h-full flex">
          {/* Spacer for first column */}
          <div className="w-1/4"></div>
          {/* Spacer for second column */}
          <div className="w-1/4"></div>
          {/* Red line for Delivery Failures */}
          <div className="w-1/4 flex justify-center">
            <div className="w-0.5 h-full bg-red-500"></div>
          </div>
          {/* Orange line for Spam Score */}
          <div className="w-1/4 flex justify-center">
            <div className="w-0.5 h-full bg-orange-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
