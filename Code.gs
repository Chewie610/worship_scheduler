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
  var piano = submittedData[0][6];
  var guitar = submittedData[0][7];
  var bass = submittedData[0][8];
  var drum = submittedData[0][9];
  // Appending all Instrument into correct dates (Month of Jan)
  var pianoArray = [{}];
  pianoArray = piano.split(","); //Splits the piano of a person into individual dates
  for (let i = 0; i < pianoArray.length; i++) {
    for (let j = 0; j < dateArray[0].length; j++) { 
      if (pianoArray[i].trim() === dateArray[0][j].toString()){ // Trim function removes the spaces so that comparing is less sketchy
        // Correct Row Number that corresponds to Pianos
        var nameRow = 6; 

        // Calculate the target column index (shifted by one to the right)
        var targetColumn = j + 2; 

        // Get the current value in the cell
        let currentCellValue = availabilitySheet.getRange(nameRow, targetColumn).getValue(); 

        // Append the name if it's not already in the cell
        if (currentCellValue === "" || !currentCellValue.includes(name)) { 
          availabilitySheet.getRange(nameRow, targetColumn).setValue(`${currentCellValue}${currentCellValue ? ", " : ""}${name}`); 
        }
        // Break inner loop after finding a match
        break; 
      }
    }
  }

  
  var guitarArray = [{}];
  guitarArray = guitar.split(","); //Splits the guitar of a person into individual dates
  for (let i = 0; i < guitarArray.length; i++) {
    for (let j = 0; j < dateArray[0].length; j++) { 
      if (guitarArray[i].trim() === dateArray[0][j].toString()){ // Trim function removes the spaces so that comparing is less sketchy
        // Correct Row Number that corresponds to Guitars
        var nameRow = 4; 

        // Calculate the target column index (shifted by one to the right)
        var targetColumn = j + 2; 

        // Get the current value in the cell
        let currentCellValue = availabilitySheet.getRange(nameRow, targetColumn).getValue(); 

        // Append the name if it's not already in the cell
        if (currentCellValue === "" || !currentCellValue.includes(name)) { 
          availabilitySheet.getRange(nameRow, targetColumn).setValue(`${currentCellValue}${currentCellValue ? ", " : ""}${name}`); 
        }
        // Break inner loop after finding a match
        break; 
      }
    }
  }
  var bassArray = [{}];
  bassArray = bass.split(","); //Splits the piano of a person into individual dates
  for (let i = 0; i < bassArray.length; i++) {
    for (let j = 0; j < dateArray[0].length; j++) { 
      if (bassArray[i].trim() === dateArray[0][j].toString()){ // Trim function removes the spaces so that comparing is less sketchy
        // Correct Row Number that corresponds to Pianos
        var nameRow = 5; 

        // Calculate the target column index (shifted by one to the right)
        var targetColumn = j + 2; 

        // Get the current value in the cell
        let currentCellValue = availabilitySheet.getRange(nameRow, targetColumn).getValue(); 

        // Append the name if it's not already in the cell
        if (currentCellValue === "" || !currentCellValue.includes(name)) { 
          availabilitySheet.getRange(nameRow, targetColumn).setValue(`${currentCellValue}${currentCellValue ? ", " : ""}${name}`); 
        }
        // Break inner loop after finding a match
        break; 
      }
    }
  }
  var drumArray = [{}];
  drumArray = drum.split(","); //Splits the piano of a person into individual dates
  for (let i = 0; i < drumArray.length; i++) {
    for (let j = 0; j < dateArray[0].length; j++) { 
      if (drumArray[i].trim() === dateArray[0][j].toString()){ // Trim function removes the spaces so that comparing is less sketchy
        // Correct Row Number that corresponds to Pianos
        var nameRow = 7; 

        // Calculate the target column index (shifted by one to the right)
        var targetColumn = j + 2; 

        // Get the current value in the cell
        let currentCellValue = availabilitySheet.getRange(nameRow, targetColumn).getValue(); 

        // Append the name if it's not already in the cell
        if (currentCellValue === "" || !currentCellValue.includes(name)) { 
          availabilitySheet.getRange(nameRow, targetColumn).setValue(`${currentCellValue}${currentCellValue ? ", " : ""}${name}`); 
        }
        // Break inner loop after finding a match
        break; 
      }
    }
  }
  
}
