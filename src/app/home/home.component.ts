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
  saldozero = ["ferie", "festivo"];
  datatimb = [ ];
  teoriche = [ 0, 540, 540, 360, 360, 360, 0 ];
  timbrate = {
  "2018-01-01":["festivo"],
  "2018-01-02":["ferie"],
  "2018-01-03":["08:02","13:10","14:51","16:03"],
  "2018-01-04":["08:00","13:07","14:29","17:03"],
  "2018-01-05":["07:57","13:01"],
  "2018-01-06":[],
  "2018-01-07":[],
  "2018-01-08":["ferie"],
  "2018-01-09":["ferie"],
  "2018-01-10":["07:44","13:05"],
  "2018-01-11":["07:44","11:57"],
  "2018-01-12":["07:55","13:02"],
  "2018-01-13":[],
  "2018-01-14":[],
  "2018-01-15":["07:50","13:06","13:34","17:12"],
  "2018-01-16":["07:53","13:00","13:16","18:11"],
  "2018-01-17":["07:43","13:01"],
  "2018-01-18":["07:40","14:01","14:55","17:12"],
  "2018-01-19":["07:52","14:00"],
  "2018-01-20":[],
  "2018-01-21":[],
  "2018-01-22":["07:45","13:02","13:19","18:17"],
  "2018-01-23":["07:39","13:03","13:16","17:57"],
  "2018-01-24":["07:38","09:48"],
  "2018-01-25":["07:56","13:57"],
  "2018-01-26":["07:41","14:03"],
  "2018-01-27":[],
  "2018-01-28":[],
  "2018-01-29":["07:53","13:00","13:13","16:07"],
  "2018-01-30":["07:50","13:44","13:54","16:20"],
  "2018-01-31":["07:44","13:01"]
  };

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

  cancella(d, i) {
    var tmp = this.timbrate[d];
    tmp.splice(i, 1);
    this.timbrate[d] = tmp;
  }

}
