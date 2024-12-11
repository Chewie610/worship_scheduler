function onFormSubmit(e) {
  // Get the submitted values from the form
  var submittedData = e.values;  // e.values is an array containing the form responses
  
  // Get the sheet where the form responses are saved
  var sheet = e.source.getSheetByName('Form Responses'); // Replace with your sheet name

  //Access the values
  var name = submittedData[1];
}
