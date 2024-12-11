function onFormSubmit(e) {
  // Get the submitted values from the form
  //var submittedData = e.values;  // e.values is an array containing the form responses
  
  // Get the sheet where the form responses are saved
  //var sheet = e.source.getSheetByName('Form Responses'); // Replace with your sheet name

  //Since we want to just test our code, use this to get values for now:
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses');
  var submittedData = sheet.getRange('A2:N2').getValues();  // Get values from A1 to F2 (returns a 2D array)

  //Access the values
  var name = submittedData[1];
}
