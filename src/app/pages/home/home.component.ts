import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{dataFake} from '../../components/data/datafake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photoCover:string=""
  cardTitle:string=""
  cardDescription:string=""
  private id:string |null="0"

constructor(
  private route:ActivatedRoute
){ }

ngOnInit(): void {
  this.route.paramMap.subscribe( value =>
    this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
}
setValuesToComponent(id:string|null) {
  const result = dataFake.filter(
  article => article.id == id)[0]
  this.cardTitle = result.title
  this.cardDescription = result.description
  this.photoCover= result.photoCover
}

}
