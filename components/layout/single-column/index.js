const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId("single-column-layout")
  .withLabel("Single Column Layout")
  .withDescription("For Form")
  .withFile(require("./template.twig"))
  .withIcon(Icon.ONE_COLUMN)