import { Component } from '@angular/core'

@Component({
    selector: 'app-warning',
    template: `
    <p>Example warning message.</p>`,
    styles: [`
    p {
        padding: 20px;
        background-color: mistyrose;
        border: 1px solid red
    }
    `]
})

export class WarningComponent {

}