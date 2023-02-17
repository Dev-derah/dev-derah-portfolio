export const fetchSkills = async () => {
  const res = await fetch('https://dev-derah.vercel.app/');
  const data = await res.json();
  const { skills } = data;
  return skills;
};
