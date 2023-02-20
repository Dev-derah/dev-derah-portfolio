/* eslint-disable function-paren-newline */
export const fetchProjecsts = async () => {
  const res = await fetch('https://dev-derah.vercel.app/api/getProjects');
  const data = await res.json();
  const projects = data;
  return projects;
};
