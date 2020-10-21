export default {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the product in cents",
      validation: (Rule) => Rule.min(1000),
    },
  ],
};
