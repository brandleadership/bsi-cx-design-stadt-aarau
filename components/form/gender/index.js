const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId("gender")
  .withLabel("Gender Select")
  .withDescription("Form Field")
  .withFile(require("./template.twig"))
  .withIcon(Icon.FORMFIELD)
  .withParts(cx.part.formSelect.withLabel("Bitte anwählen"));
