// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Import Repeatable Documents
import skill from "./skill";
import project from "./project";

// Import objects
import blockContent from "./blockContent";
import navLink from "./objects/navLink";
import contactLink from "./objects/contactLink";
import webImage from "./objects/webImage";

// import section objects
import hero from "./sections/hero";
import portfolio from "./sections/portfolio";

// import pagebuilder documents
import homepage from "./homepage";

// Site Settings Imports
import pageSEO from "./pageSEO";
import siteNavigation from "./siteNavigation";
import contactOptions from "./contactOptions";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    pageSEO,
    siteNavigation,
    contactOptions,
    project,
    skill,

    // Add sections to Sanity
    homepage,
    portfolio,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    navLink,
    contactLink,
    webImage,
    hero,
  ]),
});
