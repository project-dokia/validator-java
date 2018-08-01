package br.resolv.com.test;

import org.junit.Test;

import br.resolv.com.controller.FieldController;

public class ValidatorTest {

	@Test
	public void testValidator() {
		
		FieldController fieldController = new FieldController();
		System.out.println(fieldController.verifyDate("29/04/2018", "27/06/2018"));;
		
		// List<Input> inputs = new ArrayList<Input>();
		//
		// Input input1 = new Input("1234", "1234", 1234, "45");
		// inputs.add(input1);
		//
		// Input input2 = new Input("2345", "2345", "Matheus Catossi", "46");
		// inputs.add(input2);
		//
		// Input input3 = new Input("3456", "3456", "Matheus Catossi", "13");
		// inputs.add(input3);
		//
		// Input input4 = new Input("45678", "45678", "Comentario Besta", "78");
		// inputs.add(input4);
		//
		// ValidatorController validatorController = new ValidatorController();
		// validatorController.validate(new Document("90ad561435df4489b29e9fa8b4540315",
		// inputs));
	}
}
