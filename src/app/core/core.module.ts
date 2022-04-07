import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DataInterceptor } from "./interceptors/data.interceptor"
import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { UserExistPipe } from "./pipes/user-exist.pipe"

@NgModule({
	declarations: [UserExistPipe],
	providers: [
		{provide: HTTP_INTERCEPTORS, useClass: DataInterceptor, multi: true}
	],
	exports: [
		UserExistPipe
	],
	imports: [
		CommonModule
	]
})
export class CoreModule {
}
