const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId("phone-number")
  .withLabel("Phone Field")
  .withDescription("For First Person")
  .withFile(require("./template.twig"))
  .withIcon(Icon.PHONE)
  .withParts(cx.part.raw("form-field").withLabel("Phone Field"));
