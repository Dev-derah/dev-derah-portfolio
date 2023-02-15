export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getSkills`);
  const data = await res.json();
  const { skills } = data;
  return skills;
};
