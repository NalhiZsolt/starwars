import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  pictures: {route: string, id: string}[] = [
    {route: '../../assets/images/anakin.png', id: 'anakin'},
    {route: '../../assets/images/boba.png', id: 'boba'},
    {route: '../../assets/images/grievous.png', id: 'grievous'},
    {route: '../../assets/images/kenobi.png', id: 'kenobi'},
    {route: '../../assets/images/luke.png', id: 'luke'},
    {route: '../../assets/images/maul.png', id: 'maul'},
    {route: '../../assets/images/phasma.png', id: 'phasma'},
    {route: '../../assets/images/rey.png', id: 'rey'},
    {route: '../../assets/images/solo.png', id: 'solo'},
    {route: '../../assets/images/stormtrooper.png', id: 'stormtrooper'},
    {route: '../../assets/images/vader.png', id: 'vader'},
    {route: '../../assets/images/yoda.png', id: 'yoda'},
  ]
  colors: string[] = ['#000000', '#333333', '#8A8A8A', '#FFFFFF', '#F7B500', '#FF3232', '#00D2FF', '#2ECC71', '#000000', '#333333', '#8A8A8A', '#FFFFFF']
}
