import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField(
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name:'logo',
        title:"Logo",
        type:'image',
        options: {hotspot:true}
    }),
  ]})
