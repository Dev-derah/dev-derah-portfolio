import { groq } from 'next-sanity';
import { sanityClient } from '../../lib/sanity.client';

const query = groq`*[_type == "project"]{
  ...,
  techstack[]->{title}
}`;

export default async function handler(req, res) {
  const projects = await sanityClient.fetch(query);
  res.status(200).json(projects);
  return projects;
}
