/* eslint-disable function-paren-newline */
export const fetchProjecsts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
  const data = await res.json();
  const projects = data;
  return projects;
};
