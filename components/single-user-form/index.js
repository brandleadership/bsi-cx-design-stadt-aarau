const {cx, Icon} = require('@bsi-cx/design-build');
const {layoutElements} = require('@bsi-cx/design-standard-library-web/content-elements/layout/');
const {contentElements} = require("@bsi-cx/design-standard-library-web/content-elements/base/");
const {formElements} = require("@bsi-cx/design-standard-library-web/content-elements/form/");

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId("single-user-form")
  .withLabel("Single User Form Container")
  .withFile(require("./template.twig"))
  .withIcon(Icon.ONE_COLUMN)
  .withDropzones(
    cx.dropzone
      .withDropzone("single-form-dropzone, form-container-dropzone-zsY6UI")
      .withAllowedElements(
        ...layoutElements,
        require("@bsi-cx/design-standard-library-web/content-elements/form/form-container"),
        ...contentElements,
        ...formElements,
        require("../add-button")
      )
  );