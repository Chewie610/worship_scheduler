function onFormSubmit(e) {
  // Get the submitted values from the form
  // var submittedData = e.values;  // e.values is an array containing the form responses

  // Get the sheet where the form responses are saved
  // var sheet = e.source.getSheetByName('Form Responses'); // Replace with your sheet name

  //Since we want to just test our code, use this to get values for now:
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses');

  //This allows us to access the spreadsheet, specifically the 'Test' tab
  const availabilitySheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Test');

  var submittedData = sheet.getRange('A3:N3').getValues();  // Get values from A3 to F3 (returns a 2D array)
  Logger.log(submittedData);

  // Get the dates of every Sunday from the spreadsheet
  var dateArray = availabilitySheet.getRange('B1:I1').getDisplayValues();
  Logger.log(dateArray);

  //Access the values
  var name = submittedData[0][1];
  var piano = submittedData[0][6];
  var guitar = submittedData[0][7];
  var bass = submittedData[0][8];
  var drum = submittedData[0][9];
  
  function appendMusician(instrument, row){
    var instrumentArray = instrument.split(","); // Split instrument into individual dates for easier sorting
    for (let i = 0; i < instrumentArray.length; i++) {
      for (let j = 0; j < dateArray[0].length; j++) { 
        if (instrumentArray[i].trim() === dateArray[0][j].toString()){ // Trim to remove spaces (if there are any) for a less sketch comparison 
          var targetColumn = j + 2; // Get correct column to put names in
          let currentCellValue = availabilitySheet.getRange(row, targetColumn).getValue(); // Get current value in cell
          if (currentCellValue === "" || !currentCellValue.includes(name)) { // Append name if it's not already in the cell, if there is already a name then add on
            availabilitySheet.getRange(row, targetColumn).setValue(`${currentCellValue}${currentCellValue ? ", " : ""}${name}`); 
          }
          break; 
        }
      }
    }
  }
  // Call the function for each instrument
  appendMusician(guitar, 4); // Guitar
  appendMusician(bass, 5); // Bass
  appendMusician(piano, 6); // Piano
  appendMusician(drum, 7); // Drum   
}
