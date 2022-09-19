import {
  Component,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'change-detection-app-root',
  templateUrl: './ChangeDetectionStrategy.component.html',

})
export class ChangeDetectionStratergyComponent {
  @ViewChild('inputAquaticCreature') inputAquaticCreature: ElementRef;
  // aquaticCreatures = ['shark', 'dolphin', 'octopus'];
  aquaticCreatures = new BehaviorSubject(['shark', 'dolphin', 'octopus']);

  addAquaticCreature(newAquaticCreature) {
    //this.aquaticCreatures.push(newAquaticCreature);
    //this.aquaticCreatures = [...this.aquaticCreatures,newAquaticCreature]
    this.inputAquaticCreature.nativeElement.value = '';
    this.aquaticCreatures.next(newAquaticCreature);
    console.log(this.inputAquaticCreature);
  }
}
