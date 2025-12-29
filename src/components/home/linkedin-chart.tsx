'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

const data = [
  {
    name: 'Sent',
    value: 151,
    color: '#8B5CF6'
  },
  {
    name: 'Accepted',
    value: 122,
    color: '#6366F1'
  },
  {
    name: 'Replied',
    value: 92,
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
          margin={{ top: 20, right: 30, left: -20, bottom: 0 }}
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
            domain={[0, 180]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="value"
            radius={[4, 4, 0, 0]}
            barSize={40}
            animationDuration={2000}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList
              dataKey="value"
              position="top"
              fill="rgba(255,255,255,0.9)"
              fontSize={14}
              fontWeight="bold"
              offset={10}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
