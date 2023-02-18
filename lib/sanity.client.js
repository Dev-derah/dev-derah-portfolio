import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2023-02-18',
  useCdn: false,
});
export const urlFor = (source) => createImageUrlBuilder(sanityClient).image(source);
