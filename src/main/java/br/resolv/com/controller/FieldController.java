package br.resolv.com.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import br.resolv.com.model.Field;
import br.resolv.com.model.Input;
import br.resolv.com.model.ResultValidator;
import br.resolv.com.model.ResultVerifyRule;
import br.resolv.com.model.Type;
import br.resolv.com.util.Comparator;

public class FieldController {

	public List<Field> setValuesFields(List<Input> inputs, List<Field> fields) {
		for (Field field : fields) {
			for (Input input : inputs) {
				if (input.getIdField().equals(field.get_id())) {
					field.setValue(input.getValue());
				}
			}
		}
		return fields;
	}

	private ResultVerifyRule verifyRule(Field field, List<Field> validators, String command) {
		boolean result = false;
		double percentage = 0;
		if (validators.size() > 0) {
			for (Field validatorEquals : validators) {
				if (field != null) {
					if (validatorEquals.get_id().equals(field.getOtherId())) {
						if (field.getValue() != null && validatorEquals.getValue() != null) {
							if (command.equals("equals")) {
								percentage = printSimilarity(validatorEquals.getValue().toString(), field.getValue().toString());
								
								if (percentage >= field.getPercentage()) {
									result = true;
								} else {
									result = false;
								}
							} else if (command.equals("menor_igual_data")) {
								return new ResultVerifyRule(verifyDate(validatorEquals.getValue(), field.getValue()), 100);
							}

						}
					}
				}
			}
		}
		return new ResultVerifyRule(result, percentage);
	}

	public boolean verifyDate(Object dateInitial, Object dateFinal) {
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		
		String strDateInitial = dateInitial.toString(); // "28/04/2018";
		String strDateFinal = dateFinal.toString(); // "25/04/2018";
	
		try {
			java.util.Date dtInitial = sdf.parse(strDateInitial);
			java.util.Date dtFinal = sdf.parse(strDateFinal);

			Comparator comparator = new Comparator();
			return comparator.verifyDateInitialMoreDateFinal(dtInitial, dtFinal);
		} catch (ParseException pe) {
			pe.printStackTrace();
		}

		return false;
	}

	public List<ResultValidator> documentVersusRule(List<Field> fields, List<Type> types) {
		List<ResultValidator> results = new ArrayList<ResultValidator>();

		for (Field field : fields) {
			for (Type type : types) {
				if (field.getIdType() != null && type.get_id() != null) {
					ResultVerifyRule resultVerifyRule = new ResultVerifyRule();
					if (field.getIdType().equals(type.get_id())) {
						if (type.getCommand().equals("equals")) {
							resultVerifyRule = verifyRule(field, fields, "equals");
						} else if (type.getCommand().equals("number")) {
							if (field.getValue().getClass().toString().equals("class java.lang.Integer")) {
								resultVerifyRule.setResult(true);
							} else {
								resultVerifyRule.setResult(false);
							}
						} else if (type.getCommand().equals("text")) {
							if (field.getValue().getClass().toString().equals("class java.lang.String")) {
								resultVerifyRule.setResult(true);
							} else {
								resultVerifyRule.setResult(false);
							}

						} else if (type.getCommand().equals("nenhum")) {
							resultVerifyRule.setResult(true);
						} else if (type.getCommand().equals("verifica_existencia")) {
							if (field.getValue() != null) {
								resultVerifyRule.setResult(true);
							} else {
								resultVerifyRule.setResult(false);
							}
						} else if (type.getCommand().equals("menor_igual_data")) {
							resultVerifyRule = verifyRule(field, fields, "menor_igual_data");
						}
						
						results.add(new ResultValidator(field.get_id(), field.getValue(), resultVerifyRule.isResult(), field.getTitle(), type.getDescription(), field.isDependency(), field.getIdDependency(), field.getIdModel(), field.getOtherId(), field.getPercentage(), resultVerifyRule.getPercentage()));
					}
				}
			}
		}

//		for (ResultValidator resultValidator : results) {
//			if (resultValidator.isDependency() == true) {
//				for (ResultValidator resultValidatorDependency : results) {
//					if (resultValidatorDependency.getIdField().equals(resultValidator.getIdField())) {
//						if (resultValidatorDependency.isResult() == true && resultValidator.isResult() == true) {
//							resultValidator.setResult(true);
//						} else {
//							resultValidator.setResult(false);
//						}
//					}
//				}
//			}
//		}

		return results;
	}
	
	public static double similarity(String s1, String s2) {
        String longer = s1, shorter = s2;
        if (s1.length() < s2.length()) { // longer should always have greater length
            longer = s2; shorter = s1;
        }
        int longerLength = longer.length();
        if (longerLength == 0) { return 1.0; /* both strings are zero length */ }
        /* // If you have StringUtils, you can use it to calculate the edit distance:
        return (longerLength - StringUtils.getLevenshteinDistance(longer, shorter)) /
                                                             (double) longerLength; */
        return (longerLength - editDistance(longer, shorter)) / (double) longerLength;
 
    }
 
    public static int editDistance(String s1, String s2) {
        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();
 
        int[] costs = new int[s2.length() + 1];
        for (int i = 0; i <= s1.length(); i++) {
            int lastValue = i;
            for (int j = 0; j <= s2.length(); j++) {
                if (i == 0)
                    costs[j] = j;
                else {
                    if (j > 0) {
                        int newValue = costs[j - 1];
                        if (s1.charAt(i - 1) != s2.charAt(j - 1))
                            newValue = Math.min(Math.min(newValue, lastValue),
                                    costs[j]) + 1;
                        costs[j - 1] = lastValue;
                        lastValue = newValue;
                    }
                }
            }
            if (i > 0)
                costs[s2.length()] = lastValue;
        }
        return costs[s2.length()];
    }
 
    public double printSimilarity(String s, String t) {
        return (similarity(s, t) * 100);
    }

}
