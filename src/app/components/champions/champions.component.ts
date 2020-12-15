import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { ChampionService } from 'src/app/services/champion.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  champions: Object[];
  champion: Object;

  championForm = this.fb.group({
    name: [''],
    attackDamage: [''],
    armor: [''],
    id: ['']
  })

  constructor(private championService: ChampionService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.championService.getChampions()
      .subscribe(
        res => {
          this.champions = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  addChampion(): void {
    this.championService.addChampion(this.championForm.value);
  }

  searchChampionById(): void{
    this.championService.searchChampionById(this.championForm.value.id)
      .subscribe(
        res => {
          this.champion = res;
        },
        err => {
          console.log(err);
        }
      )
  }
}
