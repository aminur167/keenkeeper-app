import { useParams } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import SummaryCard from "../components/SummaryCard.jsx";
import TagList from "../components/TagList.jsx";
import { interactionIcons, interactionTypes } from "../constants/assets.js";
import { useTimeline } from "../context/TimelineContext.jsx";
import useFriends from "../hooks/useFriends.js";
import { formatDate, labelFor } from "../utils/format.js";
import NotFound from "./NotFound.jsx";

export default function FriendDetails() {
  const { id } = useParams();
  const { friends, loading } = useFriends();
  const { addEntry } = useTimeline();
  const friend = friends.find((item) => item.id === Number(id));

  if (loading) return <LoadingSpinner label="Loading friend..." />;
  if (!friend) return <NotFound />;

  return (
    <section className="mx-auto grid w-[min(860px,calc(100%_-_36px))] gap-4 py-16 lg:grid-cols-[280px_1fr]">
      <aside>
        <div className="rounded border border-slate-100 bg-white px-6 py-6 text-center shadow-md shadow-slate-200/50">
          <img className="mx-auto size-[74px] rounded-full object-cover" src={friend.picture} alt={friend.name} />
          <h1 className="mt-3 text-sm font-black text-slate-800">{friend.name}</h1>
          <div className="mt-2 flex justify-center">
            <StatusBadge status={friend.status} />
          </div>
          <div className="mt-2">
            <TagList tags={friend.tags} />
          </div>
          <p className="mt-4 text-xs italic leading-5 text-slate-500">"{friend.bio}"</p>
          <a className="mt-2 block break-all text-xs font-semibold text-slate-400" href={`mailto:${friend.email}`}>
            {friend.email}
          </a>
        </div>

        <div className="mt-2 grid gap-2">
          <button className="btn min-h-0 rounded border border-slate-100 bg-white py-2 text-[11px] font-bold text-slate-700 shadow-sm">
            <Icon name="clock" className="size-4" />
            Snooze 2 Weeks
          </button>
          <button className="btn min-h-0 rounded border border-slate-100 bg-white py-2 text-[11px] font-bold text-slate-700 shadow-sm">
            <Icon name="archive" className="size-4" />
            Archive
          </button>
          <button className="btn min-h-0 rounded border border-slate-100 bg-white py-2 text-[11px] font-bold text-red-500 shadow-sm">
            <Icon name="trash" className="size-4" />
            Delete
          </button>
        </div>
      </aside>

      <div className="grid content-start gap-4">
        <div className="grid gap-4 sm:grid-cols-3">
          <SummaryCard compact title="Days Since Contact" value={friend.days_since_contact} />
          <SummaryCard compact title="Goal (Days)" value={friend.goal} />
          <SummaryCard compact title="Next Due" value={formatDate(friend.next_due_date)} />
        </div>

        <section className="flex min-h-[88px] items-center justify-between rounded border border-slate-100 bg-white px-5 py-4 shadow-md shadow-slate-200/50">
          <div>
            <p className="text-xs font-black text-slate-800">Relationship Goal</p>
            <h2 className="mt-3 text-xs font-medium text-slate-500">
              Connect every <span className="font-black text-slate-800">{friend.goal} days</span>
            </h2>
          </div>
          <button className="btn btn-xs min-h-0 rounded border-slate-100 bg-slate-50 px-3 text-[10px] shadow-none">Edit</button>
        </section>

        <section className="rounded border border-slate-100 bg-white p-5 shadow-md shadow-slate-200/50">
          <p className="mb-4 text-xs font-black text-slate-800">Quick Check-In</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {interactionTypes.map((type) => (
              <button
                key={type}
                className="btn min-h-[78px] rounded border border-slate-100 bg-slate-50 py-4 text-xs font-medium text-slate-800 shadow-none hover:bg-slate-100"
                onClick={() => addEntry(type, friend.name)}
              >
                <img className="size-6" src={interactionIcons[type]} alt="" />
                {labelFor(type)}
              </button>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
