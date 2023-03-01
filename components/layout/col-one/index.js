const {cx, Icon} = require('@bsi-cx/design-build');
const {
  contentElements,
} = require("@bsi-cx/design-standard-library-web/content-elements/base/");

const element = cx.contentElement;

/**
 * @returns {ContentElement}
 */
module.exports = element;
element
  .withElementId("col-one-l2ZclN")
  .withFile(require("./template.twig"))
  /*.withLabel('1 Column')*/
  .withLabel("1 Spalte")
  .withIcon(Icon.ONE_COLUMN)
  .withStyleConfigs(
    require("@bsi-cx/design-standard-library-web/configs/styles/col-width"),
    require("@bsi-cx/design-standard-library-web/configs/styles/col-spacing"),
    require("@bsi-cx/design-standard-library-web/configs/styles/col-gap"),
    require("@bsi-cx/design-standard-library-web/configs/styles/col-alignment"),
    require("@bsi-cx/design-standard-library-web/configs/styles/background-color"),
    require("@bsi-cx/design-standard-library-web/configs/styles/color-gradient"),
    require("@bsi-cx/design-standard-library-web/configs/styles/background-opacity")
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("col-one-dropzone-OzGBbS")
      .withAllowedElements(
        element,
        require("@bsi-cx/design-standard-library-web/content-elements/layout/col-two"),
        require("@bsi-cx/design-standard-library-web/content-elements/layout/col-three"),
        require("@bsi-cx/design-standard-library-web/content-elements/layout/col-four"),
        require("@bsi-cx/design-standard-library-web/content-elements/layout/spacer"),
        require("@bsi-cx/design-standard-library-web/content-elements/base/banner"),
        ...contentElements,
        require("@bsi-cx/design-standard-library-web/content-elements/form/form-container"),
        require("../../single-user-form"),
        require("../../sections/form")
      )
  );