export default {
  name: "price",
  title: "Price",
  type: "object",
  description: "Price of the pizza in cents",
  fields: [
    {
      name: "Small",
      type: "number",
      title: "Small price",
      validation: (Rule) => Rule.min(1000),
    },
    {
      name: "Medium",
      type: "number",
      title: "Medium price",
      validation: (Rule) => Rule.min(1000),
    },
    {
      name: "Large",
      type: "number",
      title: "Large price",
      validation: (Rule) => Rule.min(1000),
    },
  ],
};
