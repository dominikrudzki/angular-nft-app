import { NgModule } from '@angular/core'
import { CoreModule } from "../core/core.module"
import { CommonModule } from '@angular/common'
import { CardComponent } from "./components/card/card.component"

@NgModule({
	declarations: [CardComponent],
	imports: [CommonModule, CoreModule],
	exports: [CardComponent]
})
export class SharedModule {
}
