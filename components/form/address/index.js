const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId("address-first")
  .withLabel("Address Field")
  .withDescription("For First Person")
  .withFile(require("./template.twig"))
  .withIcon(Icon.COMPASS)
  .withParts(
    cx.part.raw('form-field')
      .withLabel('Address Field')
  )
