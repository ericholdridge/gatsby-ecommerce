// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import Hero from "./Hero/Hero";
import Menu from "./Menu/Menu";
import Price from "./Menu/Price";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([Hero, Menu, Price]),
});
