package br.resolv.com.test;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import br.resolv.com.controller.ValidatorController;
import br.resolv.com.model.Document;
import br.resolv.com.model.Input;

public class ValidatorTest {

	
	@Test
	public void testValidator() {
		List<Input> inputs = new ArrayList<Input>();
		
		Input input1 = new Input("1234", "1234", 1234, "45");
		inputs.add(input1);
		
		Input input2 = new Input("2345", "2345", "Matheus Catossi", "46");
		inputs.add(input2);
		
		Input input3 = new Input("3456", "3456", "Matheus Catossi", "13");
		inputs.add(input3);
		
		Input input4 = new Input("45678", "45678", "Comentario Besta", "78");
		inputs.add(input4);
		
		ValidatorController validatorController = new ValidatorController();
		validatorController.validate(new Document("90ad561435df4489b29e9fa8b4540315", inputs));
	}

	
}
