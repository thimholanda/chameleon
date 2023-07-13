const now = new Date();
const users = [{ id: "19", name: "Jane", email: "jane@chameleon.io", disabled: false, last_seen_time: now }];

interface User {
  id: string;
  name: string;
  email: string;
  disabled?: boolean;
  last_seen_time?: Date;
}

export const httpGet = (userId: string): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.filter((user) => user.id === userId);
      if (user) {
        resolve(user);
      } else {
        reject("user not found");
      }
      return;
    }, 1000);
  });
};
