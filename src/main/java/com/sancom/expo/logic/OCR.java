package com.sancom.expo.logic;

import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;

import java.io.File;

public class OCR {
    public static void main(String []args) {
        Tesseract tesseract = new Tesseract();
        try {
            tesseract.setDatapath("/home/user/Downloads/fredtest/sancom/tessdata");
            String text = tesseract.doOCR(new File("resume.pdf"));
//            String tt = tesseract.doOCR()
            System.out.print(text);
        } catch (TesseractException e) {
            e.printStackTrace();
        }
    }
}
