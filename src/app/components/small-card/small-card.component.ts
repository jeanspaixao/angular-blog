import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{dataFake} from '../data/datafake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string="https://profuturo.education/wp-content/uploads/2022/03/Captura-de-pantalla-2022-03-11-a-las-10.51.35.png"
  @Input()
  cardTitle:string=""
  @Input()
  cardDescription:string=""
  @Input()
  id:string="0"

  constructor(
    private route:ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id:string) {
  const result = dataFake.filter(
    article => article.id == id)[0]

    this.cardTitle = result.title
    this.cardDescription = result.subtitle
    this.photoCover = result.photoCover

  }

  }
