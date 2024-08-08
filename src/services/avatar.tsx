export default function getGravatarUrl(seed: string, size = 80) {
  const trimmedEmail = seed.trim().toLowerCase();
  // to hex
  const hash = trimmedEmail.split("").reduce((acc, char) => {
    const charCode = char.charCodeAt(0);
    return acc + charCode.toString(16);
  });
  return `https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=${hash}`;
}
