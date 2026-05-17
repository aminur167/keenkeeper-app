import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { interactionTypes } from "../constants/assets.js";
import { useTimeline } from "../context/TimelineContext.jsx";
import { labelFor } from "../utils/format.js";

const colors = ["#8b5cf6", "#1f5c49", "#2d9b78"];

export default function Stats() {
  const { entries } = useTimeline();
  const data = interactionTypes.map((type) => ({
    name: labelFor(type),
    value: entries.filter((entry) => entry.type === type).length
  }));

  return (
    <section className="mx-auto w-[min(820px,calc(100%_-_36px))] py-16">
      <h1 className="mb-5 text-4xl font-black tracking-normal text-slate-800">Friendship Analytics</h1>
      <div className="card rounded border border-slate-100 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-black text-slate-800">By Interaction Type</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} cx="50%" cy="48%" dataKey="value" innerRadius={70} nameKey="name" outerRadius={104}>
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={colors[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
