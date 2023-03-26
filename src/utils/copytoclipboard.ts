export const copyToClipboard = (keywords: string) => {
  navigator.clipboard.writeText(keywords);
};
