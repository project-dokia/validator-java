package br.resolv.com.util;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.lang3.reflect.FieldUtils;

import br.resolv.com.model.Change;

public class ComparatorDocument {

	public static final String[] DO_NOT_CHECK = new String[] { "documentsLog", "class", "lastModify", "class", "_id", "_rev", "author" };
	public static final String ARRAYLIST = "class java.util.ArrayList";
	public static final String STRING = "class java.lang.String";
	public static final String BOOLEAN = "boolean";
	public static final String INT = "int";
	List<String> list_do_not_check = Arrays.asList(DO_NOT_CHECK);

	private static boolean set(Object object, String fieldName, Object fieldValue) {
		Class<?> clazz = object.getClass();
		while (clazz != null) {
			try {
				Field field = clazz.getDeclaredField(fieldName);
				field.setAccessible(true);
				field.set(object, fieldValue);
				return true;
			} catch (NoSuchFieldException e) {
				clazz = clazz.getSuperclass();
			} catch (Exception e) {
				throw new IllegalStateException(e);
			}
		}
		return false;
	}

	private boolean vefiryModify(Object last, Object current, String keyOld)
			throws IllegalArgumentException, IllegalAccessException {
		
		if(last == null || current == null || keyOld == null || keyOld.toString().equals("empty")) return false;
		
		return (FieldUtils.getField(last.getClass(), keyOld, true).get(last) != null
				&& FieldUtils.getField(current.getClass(), keyOld, true).get(current) != null
				&& !FieldUtils.getField(last.getClass(), keyOld, true).get(last)
						.equals(FieldUtils.getField(current.getClass(), keyOld, true).get(current)));
	}

	public Change verifyDocument(Object last, Object current, Class<?> clazz) {
		Map<String, Object> fieldsOld = null;
		Map<String, Object> fieldsCurrent = null;

		Object instanceOld = null;
		Object instanceCurrent = null;
		try {
			instanceOld = clazz.newInstance();
			instanceCurrent = clazz.newInstance();
		} catch (InstantiationException | IllegalAccessException e1) {
			e1.printStackTrace();
		}

		boolean modification = false;

		try {
			fieldsOld = extracted(last);
			fieldsCurrent = extracted(current);

			for (Map.Entry<String, Object> entry : fieldsOld.entrySet()) {
				if (entry.getValue() != null) {

					String keyOld = entry.getKey();

					if (!list_do_not_check.contains(keyOld)) {
						Object valueOld = entry.getValue();
						Object valueCurrent = fieldsCurrent.get(keyOld);

						if (vefiryModify(last, current, keyOld)) {

							Field field = clazz.getDeclaredField(keyOld);
							Class<?> type = field.getType();

							if (type.toString().equals(STRING) || type.toString().equals(BOOLEAN) || type.toString().equals(INT)) {
								if (type.toString().equals(BOOLEAN)) {
									valueCurrent = Boolean.parseBoolean(valueCurrent.toString());
									valueOld = Boolean.parseBoolean(valueOld.toString());
								}
								
								if (type.toString().equals(INT)) {
									valueCurrent = Integer.parseInt(valueCurrent.toString());
									valueOld = Integer.parseInt(valueOld.toString());
								}

								if (instanceOld != null)
									set(instanceOld, keyOld, valueOld);
								if (instanceCurrent != null)
									set(instanceCurrent, keyOld, valueCurrent);

								modification = true;
							} else {
								if (FieldUtils.getField(last.getClass(), keyOld, true).get(last) != null
										&& FieldUtils.getField(current.getClass(), keyOld, true).get(current) != null) {
									Field fOld = FieldUtils.getField(last.getClass(), keyOld, true);
									Field fCurrent = FieldUtils.getField(current.getClass(), keyOld, true);

									if (FieldUtils.getField(current.getClass(), keyOld, true).get(current).getClass()
											.toString().equals(ARRAYLIST)) {
										List<Object> listOld = extracted(last, fOld);
										List<Object> listCurrent = extracted(current, fCurrent);

										List<Object> listModificationsOld = new ArrayList<Object>();
										List<Object> listModificationsCurrent = new ArrayList<Object>();

										if (listOld.size() > 0) {
											if (listOld.get(0).getClass().toString().equals(STRING)) {
												listModificationsOld = listOld;
												listModificationsCurrent = listCurrent;
											} else {
												for (int i = 0; i < listOld.size(); i++) {
													
													// array de string dando erro
													
													System.out.println(listOld.get(i));
													System.out.println(listCurrent.get(i));
													System.out.println(listOld.get(i).getClass());
													
													Change change = verifyDocument(listOld.get(i), listCurrent.get(i),
															listOld.get(i).getClass());

													if (change != null) {
														listModificationsOld.add(change.getOld());
														listModificationsCurrent.add(change.getCurrent());
													} else {
														listModificationsOld.add(new Change());
														listModificationsCurrent.add(new Change());
													}
												}
											}

											if (instanceOld != null)
												set(instanceOld, keyOld, listModificationsOld);
											if (instanceCurrent != null)
												set(instanceCurrent, keyOld, listModificationsCurrent);

										}

										modification = true;
									} else {
										Object objOld = fOld.get(last);
										Object objCurrent = fCurrent.get(current);

										Change change = verifyDocument(objOld, objCurrent, objOld.getClass());

										if (change != null) {
											if (instanceOld != null) set(instanceOld, keyOld, change.getOld());
											if (instanceCurrent != null) set(instanceCurrent, keyOld, change.getCurrent());
										}
										modification = true;
									}
								}
							}
						}
					}
				}

			}
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchFieldException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SecurityException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		Change change = null;

		if (modification) {
			change = new Change();
			change.setOld(instanceOld);
			change.setCurrent(instanceCurrent);

		}
		return change;
	}

	@SuppressWarnings("unchecked")
	private List<Object> extracted(Object last, Field fOld) throws IllegalAccessException {
		return (List<Object>) fOld.get(last);
	}

	@SuppressWarnings("unchecked")
	private Map<String, Object> extracted(Object last)
			throws IllegalAccessException, InvocationTargetException, NoSuchMethodException {
		return (Map<String, Object>) BeanUtils.describe(last);
	}
}
