export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'Image of restaurant',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Latitude of restaurant',
      type: 'number',
    },
    {
      name: 'long',
      title: 'Longitude of restaurant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Restaurant adress',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Enter rating (1-5 stars)',
      type: 'number',
      validation: (Rule) => Rule.required()
      .min(1)
      .max(5)
      .error("Please enter value 1-5"),
    },
    {
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{type: "category"}]
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: "reference", to: [{type: "dish"}] }],
    },

  ],
}
