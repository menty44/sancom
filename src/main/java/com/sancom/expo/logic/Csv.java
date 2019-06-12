package com.sancom.expo.logic;

//import org.codehaus.jettison.json.JSONObject;

import org.json.simple.JSONObject;
import org.json.simple.Jsoner;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;

//import org.codehaus.jettison.json.JSONException;
//import org.codehaus.jettison.json.JSONObject;

public class Csv {

    public static void main(String[] args) {
        int i;
        String line = "";
        String fileToParse = "csv_data.csv";
        BufferedReader fileReader = null;
        boolean initial = true;
        ArrayList<String> header = new ArrayList<String>();
        JSONObject record = new JSONObject();
        try {
            fileReader = new BufferedReader(new FileReader(fileToParse));
            while ((line = fileReader.readLine()) != null) {
                i = 0;
                String[] tokens = line.split(",");
                if (initial) {

                    for (String token : tokens) {
                        if (token.startsWith("\"")) {
                            token = token.substring(1);
                        }
                        if (token.endsWith("\"")) {
                            token = token.substring(0, token.length() - 1);
                        }
                        header.add(token);
                    }
                    initial = false;
                    continue;

                }
                // Get all tokens available in line
                for (String token : tokens) {
                    if (token.startsWith("\"")) {
                        token = token.substring(1);
                    }
                    if (token.endsWith("\"")) {
                        token = token.substring(0, token.length() - 1);
                    }
                    record.put(header.get(i).toString(), token);
                    i++;
                    if (i == header.size())
                        break;

                }
//                String[] items = new String[]record;
//                Object[] object = record;
//                System.out.println(items);
                // Java objects to JSON String
                String f = Jsoner.serialize(record);
                // pretty print
//                f = Jsoner.prettyPrint(f);
//                System.out.println(Arrays.asList(record));
                System.out.println(f);

            }
//            System.out.println("["+record+"]");

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
