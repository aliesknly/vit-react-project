//Only used for localstorag save persist user in case  of logout and login again.
export const persisLocalStorageUser = <T>(key: string, value: T) => {
  const user = { ...value };
  //Discoment this line to remove password from localstorage
  //delete user?.password;
  localStorage.setItem(key, JSON.stringify({ ...user }));
};
export const clearLocalStorageUser = (key:string) => {
  localStorage.removeItem(key);
};
