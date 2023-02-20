const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId("add-button")
  .withLabel("Button Add Participants")
  .withFile(require("./template.twig"))
  .withIcon(Icon.FORMFIELD)
  .withParts(  
    cx.part.link
      .withLabel('Button'));
