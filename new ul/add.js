const sheets=SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1GBrHWa6v66GhsOYZXVhkbYWfbXoJJ2lRIX8_irFnM9M/edit#gid=0");
const sheet=sheets.getSheetByName("Sheet1");
function doPost(e){
  var data= e.parameter;
  sheet.appendRow([data.t1,data.t2,data.t3]);
  return ContentService.createTextOutput("SUCCESS");
}