import { groq } from 'next-sanity';
import { sanityClient } from '../../lib/sanity.client';

const query = groq`*[_type == "skill"]`;

export default async function handler() {
  const skills = await sanityClient.fetch(query);
  return skills;
}
