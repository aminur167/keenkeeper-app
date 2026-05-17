export function summarizeFriends(friends) {
  return friends.reduce(
    (summary, friend) => {
      summary[friend.status] += 1;
      return summary;
    },
    { overdue: 0, "almost due": 0, "on-track": 0 }
  );
}
