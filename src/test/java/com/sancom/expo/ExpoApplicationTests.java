package com.sancom.expo;

import com.sancom.expo.controller.ArithmeticOperations;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static junit.framework.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ExpoApplicationTests {

//	@Test
//	public void contextLoads() {
//	}

	@Test
	public void testAdd()
	{
		ArithmeticOperations operations = new ArithmeticOperations();
		Integer actual = operations.add(2, 6);
		Integer expected = 8;
		assertEquals(expected, actual);
	}
}
