import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { ConfigService } from 'src/app/services/config.service';
import { HttpService } from 'src/app/services/http.service';
import { SwiperOptions } from 'swiper';
import { PaginationOptions } from 'swiper/types/modules/pagination';
import { NavigationOptions } from 'swiper/types/modules/navigation';
import { ScrollbarOptions } from 'swiper/types/modules/scrollbar';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-select-character',
  templateUrl: './select-character.component.html',
  styleUrls: ['./select-character.component.scss']
})
export class SelectCharacterComponent implements OnInit {
  public show: boolean = true;

  public type: string = 'component';

  public disabled: boolean = false;

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };
  private navigation: NavigationOptions = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

  private scrollbar: ScrollbarOptions = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: PaginationOptions = {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
    hideOnClick: false
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  characterList: Character[] = [];
  index = 0;
  pictureList = this.configService.pictures
  colorList = this.configService.colors
  selectedCharacter: Character;
  selectedLightCharacter: Character;
  selectedDarkCharacter: Character;

  constructor(private httpService: HttpService, private configService: ConfigService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getCharacters().subscribe(
      (data: any) => {
        this.characterList = data.characters;

        for(let i = 0; i< this.characterList.length; i++) {
          let picture = this.pictureList.filter(data => data.id == this.characterList[i].id)
          this.characterList[i].picture = picture[0].route
        }
        this.selectedCharacter = this.characterList[0]
      },
      error => console.error(error)
    )
  }

  selectDarkCharacter(character:Character) {
    this.selectedDarkCharacter = character
    console.log(this.selectedDarkCharacter);
  }
  selectLightCharacter(character:Character) {
    this.selectedLightCharacter = character;
    console.log(this.selectedLightCharacter);
  }
  battle() {
    if(this.selectedDarkCharacter && this.selectedLightCharacter ) {

      this.router.navigate(['/arena'])
    }
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
    this.selectedCharacter = this.characterList[index]
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

}
