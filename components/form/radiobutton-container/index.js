const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId("radiobutton-container")
  .withLabel("Container For Radiobuttons")
  .withDescription("For Form")
  .withFile(require("./template.twig"))
  .withIcon(Icon.FORMFIELD)
  .withParts(
    cx.part.formRadio.withLabel("Radio Field One"),
    cx.part.formRadio.withLabel("Radio Field Two"),
    cx.part.formRadio.withLabel("Radio Field Three"),
    cx.part.formRadio.withLabel("Radio Field Four")
  );
