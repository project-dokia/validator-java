package br.resolv.com.ws;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;



@ApplicationPath("api")
public class ApplicationApis extends Application {
	
    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> classes = new HashSet<Class<?>>();
        classes.add(ValidatorWS.class);
        classes.add(FieldWS.class);
        classes.add(TypeWS.class);
        classes.add(RuleWS.class);
        classes.add(ModelWS.class);
        classes.add(FeedbackWS.class);
        classes.add(SyncWS.class);
        return classes;
    }
}