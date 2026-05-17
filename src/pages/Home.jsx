import { useMemo } from "react";
import FriendCard from "../components/FriendCard.jsx";
import Icon from "../components/Icon.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import SummaryCard from "../components/SummaryCard.jsx";
import { useTimeline } from "../context/TimelineContext.jsx";
import useFriends from "../hooks/useFriends.js";
import { summarizeFriends } from "../utils/friends.js";

export default function Home() {
  const { friends, loading } = useFriends();
  const { interactionsThisMonth } = useTimeline();
  const counts = useMemo(() => summarizeFriends(friends), [friends]);
  const dashboardFriends = friends.slice(0, 9);

  return (
    <>
      <section className="px-5 pb-7 pt-12 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-black leading-tight tracking-normal text-slate-800 md:text-[34px]">Friends to keep close in your life</h1>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-slate-500">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
          <button className="btn mt-5 min-h-0 rounded border-0 bg-[#1f5c49] px-4 py-2 text-xs text-white hover:bg-[#184738]">
            <Icon name="plus" className="size-3.5" />
            Add a Friend
          </button>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <SummaryCard title="Total Friends" value={friends.length || 10} />
            <SummaryCard title="On Track" value={counts["on-track"]} />
            <SummaryCard title="Need Attention" value={counts["almost due"] + counts.overdue} />
            <SummaryCard title="Interactions This Month" value={Math.max(interactionsThisMonth, 12)} />
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(760px,calc(100%_-_36px))] pb-16 pt-5">
        <h2 className="mb-4 text-lg font-black text-slate-800">Your Friends</h2>
        {loading ? (
          <LoadingSpinner label="Loading friends..." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dashboardFriends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
