export const fetchSkills = async () => {
  const res = await fetch('http:/localhost:3000/api/getSkills');
  const data = await res.json();
  const { skills } = data;
  return skills;
};
