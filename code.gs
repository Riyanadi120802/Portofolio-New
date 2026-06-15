function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.openById("10BHL0HnGezfdeABsa-4NjN_sF3s_5GVo22Q2Nsv-Cj0").getActiveSheet();
  sheet.appendRow([new Date(), data.nama, data.email, data.pesan]);

  return ContentService.createTextOutput(JSON.stringify({status: "success"}))
                       .setMimeType(ContentService.MimeType.JSON);
}
