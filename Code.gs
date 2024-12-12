function onFormSubmit(e) {
  // Get the submitted values from the form
  // var submittedData = e.values;  // e.values is an array containing the form responses

  // Get the sheet where the form responses are saved
  // var sheet = e.source.getSheetByName('Form Responses'); // Replace with your sheet name

  //Since we want to just test our code, use this to get values for now:
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses');

  //This allows us to access the spreadsheet, specifically the 'Test' tab
  const availabilitySheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Test');

  var submittedData = sheet.getRange('A2:N2').getValues();  // Get values from A3 to F3 (returns a 2D array)
  Logger.log(submittedData);

  // Get the dates of every Sunday from the spreadsheet
  var dateArray = availabilitySheet.getRange('B1:I1').getDisplayValues();
  Logger.log(dateArray);

  //Access the values
  var name = submittedData[0][1];
  var vocalFP = submittedData[0][3];
  var vocalSP = submittedData[0][4];
  var pianoM1 = submittedData[0][6];
  var guitarM1 = submittedData[0][7];
  var bassM1 = submittedData[0][8];
  var drumM1 = submittedData[0][9];
  var pianoM2 = submittedData[0][10];
  var guitarM2 = submittedData[0][11];
  var bassM2 = submittedData[0][12];
  var drumM2 = submittedData[0][13];

  
  // Call the function for each instrument
  appendMusician(guitarM1, 4); // Guitar Month 1
  appendMusician(bassM1, 5); // Bass Month 1
  appendMusician(pianoM1, 6); // Piano Month 1
  appendMusician(drumM1, 7); // Drum Month 1
  
  // Month 2
  appendMusician(guitarM2, 4);
  appendMusician(bassM2, 5);
  appendMusician(pianoM2, 6);
  appendMusician(drumM2, 7);
  
  // Vocals
  appendMusician(vocalFP, 2);
  appendMusician(vocalSP, 3);

  function appendMusician(instrument, row, month){
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
}
