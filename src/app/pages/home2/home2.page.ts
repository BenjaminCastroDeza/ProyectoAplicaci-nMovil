import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
  standalone: false
})
export class Home2Page implements OnInit {

  nombreUsuario: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.nombreUsuario = this.route.snapshot.paramMap.get('usuario') || '';
  }

}

