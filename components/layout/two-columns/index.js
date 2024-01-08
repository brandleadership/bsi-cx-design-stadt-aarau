const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId("two-columns-layout")
  .withLabel("Two Columns Layout")
  .withDescription("For Form")
  .withFile(require("./template.twig"))
  .withIcon(Icon.TWO_COLUMNS);