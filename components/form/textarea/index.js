const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId("textarea")
  .withLabel("Textarea")
  .withDescription("For Form")
  .withFile(require("./template.twig"))
  .withIcon(Icon.FORMFIELD)
  .withParts(cx.part.formTextarea.withLabel("Textarea Details"));
