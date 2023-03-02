const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId("location-first")
  .withLabel("Location Field")
  .withDescription("For First Person")
  .withFile(require("./template.twig"))
  .withIcon(Icon.COMPASS)
  .withParts(cx.part.formField.withLabel("Location Field"));
