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
  saldotot = [ ];
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
  
  saldopar(d, i) {
    var ent = this.timbrate[d][i-1];
    var usc = this.timbrate[d][i];
    var mme = parseInt(ent.substr(0,2))*60+parseInt(ent.substr(3,2));
    var mmu = parseInt(usc.substr(0,2))*60+parseInt(usc.substr(3,2));
    if (this.saldotot.indexOf(d) === -1) { this.saldotot[d] = 0; }
    this.saldotot[d] += (mmu - mme); 
    return mmu - mme;
  }

  cancella(d, i) {
    var tmp = this.timbrate[d];
    tmp.splice(i, 1);
    this.timbrate[d] = tmp;
  }


}
