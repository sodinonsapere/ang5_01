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
  giustif: string; 
  ladata = this.adesso.substr(0,10); 
  lora   = this.adesso.substr(11,5);
  saldozero = ["ferie", "festivo"];
  teoriche = [ 0, 540, 540, 360, 360, 360, 0 ];
  timbrate = { };
  datatimb = [ ];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.getTimbrate().subscribe( res => { 
      this.timbrate = res;
      this.datatimb = Object.keys(this.timbrate).sort();
    });
  }

  giustificativo() {
    alert(this.giustif)
  }

  memo() { //Memorizza la timbrata in una stringa riassuntiva
  var oratmp = this.timbrate[this.ladata];
  if (oratmp == undefined) { 
    oratmp = [this.lora];
  } else {
    if (oratmp.indexOf(this.lora) === -1 && this.saldozero.indexOf(oratmp[0]) === -1) {
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
    if (mme < 465) { mme = 465; }
    var mmu = parseInt(usc.substr(0,2))*60+parseInt(usc.substr(3,2));
    return mmu - mme;
  }

  saldotot(d) {
    var l = this.timbrate[d].length;
    if (l % 2 === 1) { l--; }
    var tot = 0;
    for (var i = 2; i <= l; i = i + 2) {
      tot += this.saldopar(d, i-1);
    } 
    return tot; 
  }

  saldogio(d) {
    var tmpd = new Date(d);
    var gs = tmpd.getDay(); 
    if (this.saldozero.indexOf(this.timbrate[d][0]) === -1) { 
      return this.saldotot(d) - this.teoriche[gs];
    } else {
      return 0; 
    }
  }

  visuteo(d) { 
    var tmpd = new Date(d);
    var gs = tmpd.getDay();
    if (this.saldozero.indexOf(this.timbrate[d][0]) === -1) { 
      return this.teoriche[gs];
    } else {
      return 0;
    }
  }

  giocanc(d) {
    if (confirm("Confermi l\'eliminazione di "+d)) { 
      delete this.timbrate[d];
      this.datatimb = Object.keys(this.timbrate).sort();
    }
  }

  timbcanc(d, i, event) {
    if (event.ctrlKey && event.shiftKey) {
      document.getSelection().removeAllRanges();
      var tmp = this.timbrate[d];
      tmp.splice(i, 1);
      this.timbrate[d] = tmp;
    }
  }

}
