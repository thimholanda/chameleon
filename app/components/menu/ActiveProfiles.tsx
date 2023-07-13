"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  disabled?: boolean;
  last_seen_time?: Date;
}

interface ActiveProfilesProps {
  users: User[];
  onLaunchProfile: (name: string, email: string) => void;
}

const ActiveProfiles: React.FC<ActiveProfilesProps> = ({ users, onLaunchProfile }) => {
  var active: User[] = [];
  const [activeUsers, setActiveUsers] = useState({} as User[]);

  useEffect(() => {
    users.length > 0 &&
      users.map((user) => {
        const dateToCompare = new Date(new Date().getTime() - 24 * 60 * 1000);
        if (user.last_seen_time) {
          if (!user.disabled && new Date(user.last_seen_time) > dateToCompare) {
            active.push(user);
          }
        }
      });

    setActiveUsers([...active]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users.length]);

  return (
    <div>
      {activeUsers.length > 0 &&
        activeUsers.map(function (a) {
          console.log(a);
          return (
            <button style={{ background: "red" }} type="button" key={a.id} onClick={() => onLaunchProfile(a.name, a.email)}>
              {a.name} - {a.email}
            </button>
          );
        })}
    </div>
  );
};

export default ActiveProfiles;
