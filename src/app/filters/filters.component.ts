import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  selectedCategory = 'Toutes les catégories';
  categories:Array<string> = [
    'Toutes les catégories',
    'Bain',
    'Savon',
    'Bougies',
    'Corps',
    'Douche',
    'Visage',
    'Cheveux',
    'Coffrets',
    'Nouveautés',
    'Bio',
  ];

  @Output() selectedCat = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }


  selectCategory(cat: string) {
    this.selectedCat.emit(cat);
  }
  

}
