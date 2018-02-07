import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  adesso = new Date().toISOString();
  ladata = this.adesso.substr(0,10); 
  lora   = this.adesso.substr(11,5);
  datatimb = [ ];
  timbrate = { };

  constructor(private _data: DataService) { }

  ngOnInit() {
  }

  memo() { //Memorizza la timbrata in una stringa riassuntiva
  var oratmp = this.timbrate[this.ladata];
  if (oratmp == undefined) { 
    oratmp = [this.lora];
  } else {
    if (oratmp.indexOf(this.lora) === -1) {
      oratmp.push(this.lora); 
      oratmp.sort();
    }
  }
  this.timbrate[this.ladata] = oratmp;
  this.datatimb = Object.keys(this.timbrate).sort();
  }

  visutotgio() {
    return JSON.stringify(this.timbrate); 
  }

  saldopar(d, i) {
    var ent = this.timbrate[d][i-1];
    var usc = this.timbrate[d][i];
    var mme = parseInt(ent.substr(0,2))*60+parseInt(ent.substr(3,2));
    var mmu = parseInt(usc.substr(0,2))*60+parseInt(usc.substr(3,2));
    return mmu - mme;
  }

  saldotot(d) {
    var tmp = this.timbrate[d];
    var l = tmp.length;
    if (l % 2 === 1) { l--; }
    var tot = 0;
    for (var i = 2; i <= l; i = i + 2) {
    } 

    return JSON.stringify(l); 
  }

  cancella(d, i) {
    var tmp = this.timbrate[d];
    tmp.splice(i, 1);
    this.timbrate[d] = tmp;
  }


}
