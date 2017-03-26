import { Component } from '@angular/core';
import { InitComponent } from './init/init.component' 
import { IsinService } from './isin.service'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  providers:[InitComponent ,IsinService]
})
export class AppComponent {
}
