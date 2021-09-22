import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders:{
                'x-rapidapi-key': 'ca3e18cb1emsh87fb1e4fa5e6ee5p145313jsn73b49a3ab376',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: 'f1b1bea22d7f4776a6a96c27f09db150'   
            }
        });
        return next.handle(req);
    }
}