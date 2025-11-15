export const AVATAR_URL =
  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";

export const headerOptions = [
  {
    name: "Profile",
    isNew: true,
  },
  {
    name: "Settings",
    isNew: false,
  },
  {
    name: "Logout",
    isNew: false,
  },
] as const;

export type HeaderOptionName = (typeof headerOptions)[number]["name"];
