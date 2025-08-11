// TestFactory.java
public class TestFactoryMethod {
    public static void main(String[] args) {
   
        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

        Document wordDoc = wordFactory.createDocument();
        wordDoc.open();
        wordDoc.save();

        Document pdfDoc = pdfFactory.createDocument();
        pdfDoc.open();
        pdfDoc.save();

        Document excelDoc = excelFactory.createDocument();
        excelDoc.open();
        excelDoc.save();
    }
}
