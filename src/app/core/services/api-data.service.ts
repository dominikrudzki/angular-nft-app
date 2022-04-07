import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { NFTDATA } from "../interfaces/nft-data"
import { distinct, map, Observable } from "rxjs"
import { environment } from 'src/environments/environment'

@Injectable({
	providedIn: 'root'
})
export class ApiDataService {

	constructor(private http: HttpClient) {
	}

	getApiData(): Observable<{ assets: Array<{}> }> {
		return this.http.get<NFTDATA>(environment.apiUrl).pipe(
			map((res: NFTDATA) => {
				return {
					assets: res.assets.filter((item: any) =>
						item.creator !== null && item.image_preview_url !== null
					)
				}
			}),
			distinct()
		)
	}
}
