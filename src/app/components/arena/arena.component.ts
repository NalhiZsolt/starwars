import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character';
import { ConfigService } from 'src/app/services/config.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {
  darkWinner = false
  lightWinner = false
  darkpercent = 100
  lightpercent = 100
  selectedLightCharacter: any;
  selectedDarkCharacter: any;
  colorList = this.configService.colors
  counter: any;
  constructor(private configService: ConfigService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('cart')) {
      this.selectedLightCharacter = JSON.parse(localStorage.getItem('lightchar'))
      this.selectedDarkCharacter = JSON.parse(localStorage.getItem('darkchar'))
      this.selectedLightCharacter.name = this.selectedLightCharacter.name.split('<br>').join(' ')
      this.selectedDarkCharacter.name = this.selectedDarkCharacter.name.split('<br>').join(' ')

    }
    const counter = setInterval(() => {
      if(this.lightWinner === false && this.darkWinner === false) {
        this.fight();
      } else {
        clearInterval(counter)

      }
    }, 1000);

  }
  fight() {
    const minus = Math.floor(Math.random()*25 + 1)
    const lightOrDark = Math.floor(Math.random()*10 + 1)
    if(lightOrDark > 5) {
      this.darkpercent -= minus
    } else {
      this.lightpercent -= minus
    }
    if (this.darkpercent <= 0) {
      this.darkpercent = 0
      this.lightWinner = true

    }
    if (this.lightpercent <= 0) {
      this.lightpercent = 0
      this.darkWinner = true

    }
  }

  return() {
    localStorage.removeItem('lightchar')
    localStorage.removeItem('darkchar')
    this.router.navigate(['/select-character'])
  }

}
