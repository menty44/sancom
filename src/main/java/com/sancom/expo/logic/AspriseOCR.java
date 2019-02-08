package com.sancom.expo.logic;

import com.asprise.ocr.Ocr;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;

public class AspriseOCR {
    public static void main(String[]fred) throws MalformedURLException {
        Ocr.setUp(); // one time setup
        Ocr ocr = new Ocr(); // create a new OCR engine
        ocr.startEngine("eng", Ocr.SPEED_FASTEST); // English
        String recognize = ocr.recognize(new File[] {new File("crd.jpg")},
                Ocr.RECOGNIZE_TYPE_ALL, Ocr.OUTPUT_FORMAT_PLAINTEXT); // PLAINTEXT | XML | PDF | RTF

        System.out.println("Result: " + recognize);
        ocr.stopEngine();
    }
}
