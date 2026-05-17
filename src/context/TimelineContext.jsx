import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { timelineSeeds } from "../data/timelineSeeds.js";
import { labelFor } from "../utils/format.js";
import { countThisMonth } from "../utils/timeline.js";

const TimelineContext = createContext(null);

function getInitialEntries() {
  const saved = localStorage.getItem("keenkeeper-timeline");

  if (!saved) return timelineSeeds;

  try {
    return JSON.parse(saved);
  } catch {
    localStorage.removeItem("keenkeeper-timeline");
    return timelineSeeds;
  }
}

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState(getInitialEntries);
  const [toast, setToast] = useState("");

  useEffect(() => {
    localStorage.setItem("keenkeeper-timeline", JSON.stringify(entries));
  }, [entries]);

  const value = useMemo(() => {
    const addEntry = (type, friendName) => {
      const title = `${labelFor(type)} with ${friendName}`;
      const newEntry = {
        id: crypto.randomUUID(),
        type,
        title,
        date: new Date().toISOString().slice(0, 10)
      };

      setEntries((current) => [newEntry, ...current]);
      setToast(`${title} added to timeline`);
      window.setTimeout(() => setToast(""), 2400);
    };

    return {
      addEntry,
      entries,
      interactionsThisMonth: countThisMonth(entries),
      toast
    };
  }, [entries, toast]);

  return <TimelineContext.Provider value={value}>{children}</TimelineContext.Provider>;
}

export function useTimeline() {
  const value = useContext(TimelineContext);

  if (!value) {
    throw new Error("useTimeline must be used inside TimelineProvider");
  }

  return value;
}
