export const fetchSocialss = async () => {
  const res = await fetch('https://dev-derah.vercel.app/api/getSocials');
  const data = await res.json();
  const socials = data;
  return socials;
};
