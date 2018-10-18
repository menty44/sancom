package com.sancom.expo.logic;


/**
 * Created by admin on 10/18/18.
 */

import java.time.Clock;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

/**
 * Fredrick Oluoch
 * http://www.blaqueyard.com
 * 0720106420 | 0722508906
 * email: menty44@gmail.com
 */

    public class ZonedDateTimeExample {
        public static void main(String[] args) {
            // Current date time
            ZonedDateTime dateTime1 = ZonedDateTime.now();
            System.out.println(dateTime1);

            // Current date time from specified time-zone
            ZonedDateTime dateTime2 = ZonedDateTime.now(ZoneId.of("UTC"));
            System.out.println(dateTime2);

            // Current date time from specified clock
            ZonedDateTime dateTime3 = ZonedDateTime.now(Clock.systemDefaultZone());
            System.out.println(dateTime3);

            // Current zoned date time from LocalDateTime
            ZonedDateTime dateTime4 = ZonedDateTime.of(LocalDateTime.now(), ZoneId.of("GMT"));
            System.out.println(dateTime4);

            // Specific zoned date time from LocalDateTime
            ZonedDateTime dateTime5 = ZonedDateTime.of(LocalDateTime.of(2017, 05, 12, 05, 45),
                    ZoneId.of("Europe/London"));
            System.out.println(dateTime5);
        }
    }

