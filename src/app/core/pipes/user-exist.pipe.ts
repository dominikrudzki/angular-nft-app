import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'UserExist'
})
export class UserExistPipe implements PipeTransform {

	transform(value: string | null): string {
		return value || '-- Unknown --'
	}

}
