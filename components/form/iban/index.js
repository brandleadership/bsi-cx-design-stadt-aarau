const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId("iban")
  .withLabel("IBAN-Nr.")
  .withDescription("For Refund Requester")
  .withFile(require("./template.twig"))
  .withIcon(Icon.INFO)
  .withParts(cx.part.formField.withLabel("Location Field"));
