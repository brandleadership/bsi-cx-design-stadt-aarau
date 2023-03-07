const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId("last-name")
  .withLabel("Last Name")
  .withDescription("For Form")
  .withFile(require("./template.twig"))
  .withIcon(Icon.FORMFIELD)
  .withParts(cx.part.formField.withLabel("Last Name Field"));
