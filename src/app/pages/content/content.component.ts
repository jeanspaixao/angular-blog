import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{dataFake} from '../../components/data/datafake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string="https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400"
  contentTitle:string="NOTICIA EXEMPLO"
  contentDescription:string="EXEMPLO"
  private id:string | null="0"

constructor(
  private route:ActivatedRoute
){ }

ngOnInit(): void {
  this.route.paramMap.subscribe( value =>
    this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
}
setValuesToComponent(id:string | null) {
const result = dataFake.filter(
  article => article.id == id)[0]

  this.contentTitle = result.title

}

}
