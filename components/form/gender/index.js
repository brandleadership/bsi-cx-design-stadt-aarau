const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId("gender-select")
  .withLabel("Gender Select")
  .withDescription("Form Field")
  .withFile(require("./template.twig"))
  .withIcon(Icon.FORMFIELD)
  .withParts(cx.part.raw("form-select").withLabel("Bitte anwählen"));