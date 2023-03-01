const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId("form")
  .withLabel("Group Form Container")
  .withFile(require("./template.twig"))
  .withIcon(Icon.ONE_COLUMN)
  .withParts(
    cx.part.form.withLabel("Form Details"),
    cx.part.formattedText.withId("30302e5a-6b08-11ed-a1eb-0242ac120002").withLabel("Title Second Person")
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("form-container, form-container2")
      .withAllowedElements(
        require("../../form/gender"),
        require("../../form/first-name"),
        require("../../form/last-name"),
        require("../../form/input-field"),
        require("../../form/email"),
        require("../../form/address"),
        require("../../form/location"),
        require("../../form/phone")
      )
  )


  element.form.label=Form
element.form.description=With four additional persons
element.form.icon=snippet

style.submit-alignment.label=Submit Button Alignment
style.submit-alignment.class.left-align-submit-button.label=Left
style.submit-alignment.class.center-submit-button.label=Center

element.form.parts.form[0].label=Form Details
element.form.parts.formatted-text[0].label=Title Second Person
element.form.parts.formatted-text[1].label=Title Third Person
element.form.parts.formatted-text[2].label=Title Fourth Person
element.form.parts.formatted-text[3].label=Title Fifth Person

element.form.parts.form-select[0].label=Gender Second Person
element.form.parts.form-select[1].label=Gender Third Person
element.form.parts.form-select[2].label=Gender Fourth Person
element.form.parts.form-select[3].label=Gender Fifth Person

element.form.parts.form-field[0].label=First Name Field Second Person
element.form.parts.form-field[1].label=Last Name Field Second Person

element.form.parts.form-field[2].label=First Name Field Third Person
element.form.parts.form-field[3].label=Last Name Field Third Person

element.form.parts.form-field[4].label=First Name Field Fourth Person
element.form.parts.form-field[5].label=Last Name Field Fourth Person

element.form.parts.form-field[6].label=First Name Field Fifth Person
element.form.parts.form-field[7].label=Last Name Field Fifth Person

element.form.parts.form-radio[0].label=Ticket Type First Person
element.form.parts.form-radio[1].label=Weather Option First Person
element.form.parts.form-radio[2].label=Veggie Option First Person
element.form.parts.form-radio[3].label=Additional Tickets Choice

element.form.parts.form-radio[4].label=Ticket Type Second Person
element.form.parts.form-radio[5].label=Weather Option Second Person
element.form.parts.form-radio[6].label=Veggie Option Second Person

element.form.parts.form-radio[7].label=Ticket Type Third Person
element.form.parts.form-radio[8].label=Weather Option Third Person
element.form.parts.form-radio[9].label=Veggie Option Third Person

element.form.parts.form-radio[10].label=Ticket Type Fourth Person
element.form.parts.form-radio[11].label=Weather Option Fourth Person
element.form.parts.form-radio[12].label=Veggie Option Fourth Person

element.form.parts.form-radio[13].label=Ticket Type Fifth Person
element.form.parts.form-radio[14].label=Weather Option Fifth Person
element.form.parts.form-radio[15].label=Veggie Option Fifth Person