const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("col-one")
  .withFile(require("./template.twig"))
  /*.withLabel('1 Column')*/
  .withLabel("1 Spalte")
  .withIcon(Icon.ONE_COLUMN)
  .withDropzones(cx.dropzone.withDropzone("col-one-dropzone-OzGBbS"));
