export const fetchSkills = async () => {
  const res = await fetch(
    'https://oe20z6a7.api.sanity.io/v2023-02-18/data/query/production?query=*%5B_type%20%3D%3D%20%22skill%22%5D',
  );
  const data = await res.json();
  const { skills } = data;

  return { skills };
};
