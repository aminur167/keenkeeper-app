import { useEffect, useState } from "react";

export default function useFriends() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);

    fetch("/friends.json")
      .then((response) => response.json())
      .then((data) => {
        window.setTimeout(() => {
          if (active) {
            setFriends(data);
            setLoading(false);
          }
        }, 650);
      })
      .catch(() => {
        if (active) {
          setFriends([]);
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return { friends, loading };
}
