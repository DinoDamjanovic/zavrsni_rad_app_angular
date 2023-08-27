import {Component} from '@angular/core';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-menu',
  templateUrl: './about-menu.component.html'
})
export class AboutMenuComponent {

  protected angleLeftIcon = faAngleLeft;

}
