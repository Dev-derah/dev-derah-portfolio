import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'hoverImage',
      title: 'HoverImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'websiteLink',
      title: 'WebsiteLink',
      type: 'url',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel'],
      }),
    }),
    defineField({
      name: 'githubLink',
      title: 'GithubLink',
      type: 'url',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel'],
      }),
    }),
    defineField({
      name: 'techstack',
      title: 'Techstack',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }],
    }),
  ],
});
