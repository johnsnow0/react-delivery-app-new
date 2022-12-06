export default {
  name: 'category',
  title: 'Menu category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'Image of category',
      type: 'image',
    },
  ],
}
