export default {
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Pizza Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "pizzaName",
      title: "Pizza name",
      type: "string",
    },
    {
      name: "description",
      title: "Pizza description",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: 'number',
      description: 'Price of the pizza in cents',
      validation: Rule => Rule.min(1000)
    },
  ],
};
