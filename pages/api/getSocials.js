import { groq } from 'next-sanity';
import { sanityClient } from '../../lib/sanity.client';

const query = groq`*[_type == "socials"]`;

export default async function handler(req, res) {
  const socials = await sanityClient.fetch(query);
  res.status(200).json(socials);
  return socials;
}
