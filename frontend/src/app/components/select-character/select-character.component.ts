import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SwiperOptions } from 'swiper';
import SwiperCore from 'swiper';


@Component({
  selector: 'app-select-character',
  templateUrl: './select-character.component.html',
  styleUrls: ['./select-character.component.scss']
})
export class SelectCharacterComponent implements OnInit {
  // @ViewChild("swiperRef", { static: false }) swiperRef?: SwiperComponent;

  loggedInUser: any;
  characterList: any[] = [];

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };

  constructor(private httpService: HttpService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.httpService.loggedInUser.subscribe(
      data => {this.loggedInUser = data; console.log(this.loggedInUser)},
      error => console.error(error)
    )
    this.httpService.getCharacters().subscribe(
      (data:any[]) => {this.characterList = data; console.log(this.characterList);},
      error => console.error(error)
    )
  }


}
