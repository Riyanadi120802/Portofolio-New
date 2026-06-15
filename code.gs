function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Portofolio | Riyan Adi Saputro')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// Fungsi untuk menyisipkan nilai islami sebagai bagian dari prinsip kerja (sesuai preferensi)
function getIslamicQuote() {
  return "“Bekerja bukan hanya mencari nafkah, melainkan sarana beribadah dan menjemput berkah dengan profesionalisme (Ihsan).”";
}
