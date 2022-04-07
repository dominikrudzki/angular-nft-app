import { Component, EventEmitter, Output } from '@angular/core'

@Component({
	selector: 'app-searchbar',
	templateUrl: './searchbar.component.html',
	styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
	@Output() searchbarEmitter = new EventEmitter<string>()

	emitSearchbarValue(value: string) {
		this.searchbarEmitter.emit(value)
	}
}
