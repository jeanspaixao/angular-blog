import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{dataFake} from '../../components/data/datafake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string="https://profuturo.education/wp-content/uploads/2022/03/Captura-de-pantalla-2022-03-11-a-las-10.51.35.png"
  contentTitle:string="MATEMÁGICA"
  contentDescription:string="ESSA NOTÍCIA PODE SER SUA, ENTRE EM CONTATO CONOSCO"
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
  this.contentDescription = result.description
  this.photoCover = result.photoCover

}

}
