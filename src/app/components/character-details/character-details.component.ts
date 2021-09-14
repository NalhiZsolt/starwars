import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  @Input() selectedCharacter: any ;
  @Output() selectedLightCharacter: EventEmitter<any> = new EventEmitter<any>()
  @Output() selectedDarkCharacter: EventEmitter<any> = new EventEmitter<any>()
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }
  select() {
    console.log(this.selectedCharacter);
    if (this.selectedCharacter.side == 'DARK') {
      this.httpService.selectedDarkChar.next(this.selectedDarkCharacter)
      localStorage.setItem('darkchar', JSON.stringify(this.selectedCharacter))
      this.selectedDarkCharacter.emit(this.selectedCharacter)
    }
    if (this.selectedCharacter.side == 'LIGHT') {
      this.httpService.selectedLightChar.next(this.selectedLightCharacter)
      localStorage.setItem('lightchar', JSON.stringify(this.selectedCharacter))
      this.selectedLightCharacter.emit(this.selectedCharacter)
    }
  }
}
