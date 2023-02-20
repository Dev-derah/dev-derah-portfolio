/* eslint-disable function-paren-newline */
export const fetchSkills = async () => {
  const res = await fetch('https://dev-derah.vercel.app/api/getSkills');
  const data = await res.json();
  const { skills } = data;
  return skills;
};

