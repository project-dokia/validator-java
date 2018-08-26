import { Injectable, NgModule, Inject } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';


@Injectable()
export class HTTPStatus {
    private requestInFlight$: BehaviorSubject<boolean>;
    constructor() {
        this.requestInFlight$ = new BehaviorSubject(false);
    }

    setHttpStatus(inFlight: boolean) {
        this.requestInFlight$.next(inFlight);
    }

    getHttpStatus(): Observable<boolean> {
        return this.requestInFlight$.asObservable();
    }
}

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

    constructor(private status: HTTPStatus) { }

    public getFromLocal(key): string {
        return localStorage.getItem(key);
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        var result = req.url.includes("/api/");
        if (result) this.status.setHttpStatus(true);
        
        let dupReq = req.clone({});

        return next.handle(dupReq).pipe(
            map(event => {
                
                return event;
            }),
            catchError(error => {
                return Observable.throw(error);
            }),
            finalize(() => {
                var result = req.url.includes("/api/");
                if (result) this.status.setHttpStatus(false);
            })
        );
    }
}
@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpsRequestInterceptor,
            multi: true,
        },
    ],
})
export class Interceptor { }