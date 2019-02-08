package com.sancom.expo.logic;

import java.io.UnsupportedEncodingException;
import java.util.Base64;

public class Base64test {
    public static void main(String[]oluoch) throws UnsupportedEncodingException {
        // Encode
        String asB64 = Base64.getEncoder().encodeToString("some string".getBytes("utf-8"));
        System.out.println(asB64); // Output will be: c29tZSBzdHJpbmc=

// Decode
        byte[] asBytes = Base64.getDecoder().decode("c29tZSBzdHJpbmc=");
        System.out.println(new String(asBytes, "utf-8")); // And the output is: some string
    }
}
