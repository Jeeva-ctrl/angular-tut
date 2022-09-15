import { Component, ViewChild, AfterViewInit,ElementRef } from '@angular/core';
import { CardHoverDirective } from './CardHoverDirective';
import { PupComponent } from './childComponent/PupComponent';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  extraCreature!: string;
  name = 'Angular';

  //Accessing DOM values using viewChild
  @ViewChild('someInput') someInput!: ElementRef;


  // Accessing directive values using viewChild
  @ViewChild(CardHoverDirective)
  set appShark(directive: CardHoverDirective) {
    this.extraCreature = directive.creature;
  }
  @ViewChild(CardHoverDirective) dir!:CardHoverDirective;
  // Using ViewChild with Child Components
  @ViewChild(PupComponent) pup!: PupComponent;

  ngAfterViewInit() {
    this.someInput.nativeElement.value = 'Whale!';
    console.log(this.extraCreature); // Dolphin
    console.log(this.pup.whoAmI()); // I am a pup component!
    console.log(this.dir.creature);// Dolphin
  }
}
