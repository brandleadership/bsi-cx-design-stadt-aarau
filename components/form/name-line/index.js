const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId("name-line")
  .withLabel("First + Last Name")
  .withDescription("Both on same line")
  .withFile(require("./template.twig"))
  .withIcon(Icon.FORMFIELD)
  .withParts(cx.part.formField.withLabel("Text Input Field"));
