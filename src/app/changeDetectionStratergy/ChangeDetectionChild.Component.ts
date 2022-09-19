import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'changedetection-app-child',
  templateUrl: './ChangeDetectionChild.Component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionStratergyChildComponent implements OnInit {
  // @Input() data: string[];
  @Input() data: Observable<any>;
  aquaticCreatures: string[] = [];
  constructor(private cd: ChangeDetectorRef) {}
  refresh() {
    this.cd.detectChanges();
  }
  ngOnInit() {
    this.data.subscribe((newAquaticCreature) => {
      this.aquaticCreatures = [...this.aquaticCreatures, ...newAquaticCreature];
      console.log("test",this.aquaticCreatures)
    });
  }
}
