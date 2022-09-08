import S from "@sanity/desk-tool/structure-builder";

// This file is necessary to reorder the sanity studio panes
// This makes it possible to create single use documents
export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.list()
            .title("Site Settings")
            .items([
              S.listItem().title("Site Metadata").child(
                S.document()
                  // siteSettings
                  .title("Site Metadata")
                  .schemaType("pageSEO")
                  .documentId("pageSEO")
              ),
              S.listItem()
                .title("Site Navigation")
                .child(
                  S.document()
                    .title("Site Navigation")
                    .schemaType("siteNavigation")
                    .documentId("siteNavigation")
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Homepage")
        .child(
          S.document()
            .title("Homepage")
            .schemaType("homepage")
            .documentId("homepage")
        ),
      ...S.documentTypeListItems().filter(
        // Filter out any of the singletons by adding to the array
        (listItem) =>
          ![
            "siteSettings",
            "pageSEO",
            "siteNavigation",
            "contactOptions",
            "homepage",
          ].includes(listItem.getId())
      ),
    ]);
