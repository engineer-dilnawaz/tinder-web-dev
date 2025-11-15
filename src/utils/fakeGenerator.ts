export const idGenerator = () => {
  return crypto.randomUUID();
};

export const generateUserNameFromEmail = (email: string) => {
  const namePart = email.split("@")[0];

  // generate 4 bytes of random data and convert to hex
  const uniqueSuffix = crypto
    .getRandomValues(new Uint8Array(4))
    .reduce((acc, byte) => acc + byte.toString(16).padStart(2, "0"), "");

  return `${namePart}_${uniqueSuffix}`;
};
