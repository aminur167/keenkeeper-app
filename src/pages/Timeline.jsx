import { useState } from "react";
import { interactionIcons, interactionTypes } from "../constants/assets.js";
import { useTimeline } from "../context/TimelineContext.jsx";
import { formatDate, labelFor } from "../utils/format.js";
import { sortNewest } from "../utils/timeline.js";

export default function Timeline() {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState("all");
  const filtered = sortNewest(entries.filter((entry) => filter === "all" || entry.type === filter));

  return (
    <section className="mx-auto w-[min(820px,calc(100%_-_36px))] py-14">
      <h1 className="mb-5 text-4xl font-black tracking-normal text-slate-800">Timeline</h1>
      <select className="select mb-5 w-full max-w-64 rounded border-slate-100 bg-white text-sm font-bold text-slate-500" value={filter} onChange={(event) => setFilter(event.target.value)}>
        <option value="all">Filter timeline</option>
        {interactionTypes.map((type) => (
          <option key={type} value={type}>
            {labelFor(type)}
          </option>
        ))}
      </select>

      <div className="grid gap-3">
        {filtered.map((entry) => (
          <article key={entry.id} className="flex items-center gap-3 rounded border border-slate-100 bg-white p-4 shadow-sm">
            <div className="grid size-10 place-items-center">
              <img className="size-6" src={interactionIcons[entry.type]} alt="" />
            </div>
            <div>
              <h2 className="text-sm font-black text-slate-800">{entry.title}</h2>
              <time className="text-xs font-bold text-slate-500">{formatDate(entry.date)}</time>
            </div>
          </article>
        ))}
        {!filtered.length && <p className="font-bold text-slate-500">No interactions found for this filter.</p>}
      </div>
    </section>
  );
}
