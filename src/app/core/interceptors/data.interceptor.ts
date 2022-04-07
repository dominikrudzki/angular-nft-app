import { Injectable } from '@angular/core'
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpErrorResponse
} from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs'
import { NFTDATA } from "../interfaces/nft-data"

@Injectable()
export class DataInterceptor implements HttpInterceptor {

	intercept(request: HttpRequest<NFTDATA>, next: HttpHandler): Observable<HttpEvent<NFTDATA>> {
		return next.handle(request).pipe(
			catchError((err: HttpErrorResponse) => {
				return throwError(() => {
					alert(`Error ${err.status}`)
					return err.status
				})
			})
		)
	}
}
