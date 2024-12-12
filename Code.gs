function onFormSubmit(e) {
  // Get the submitted values from the form
  // var submittedData = e.values;  // e.values is an array containing the form responses

  // Get the sheet where the form responses are saved
  // var sheet = e.source.getSheetByName('Form Responses'); // Replace with your sheet name

  //Since we want to just test our code, use this to get values for now:
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses');
  var submittedData = sheet.getRange('A3:N3').getValues();  // Get values from A3 to F3 (returns a 2D array)
  Logger.log(submittedData);
  //Access the values
  var name = submittedData[0][1];
  Logger.log(name);
  var piano = submittedData[0][6];
  Logger.log(piano);
  var guitar = submittedData[0][7];
  Logger.log(guitar);
}
