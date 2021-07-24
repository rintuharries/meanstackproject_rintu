import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent implements OnInit {
  imageWidth:number=300;
  imageMargin:number=10;
  constructor() { }

  ngOnInit(): void {
  }

}
