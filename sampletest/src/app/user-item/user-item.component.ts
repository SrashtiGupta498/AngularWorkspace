import { Component,OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit{

  @Input()names_: string | undefined;
  constructor()
  {

  }
  ngOnInit()
  {

  }
}
