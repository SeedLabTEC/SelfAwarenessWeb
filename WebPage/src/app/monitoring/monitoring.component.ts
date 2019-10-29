import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { interval, Subscription } from 'rxjs';
import { constants } from '../config/constants';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css'],
})
export class MonitoringComponent implements OnInit   {
  public myChart: any;
  public myChart1: any;
  public myChart2: any;
  public gradientStroke;
  public chartColor = "#FFFFFF";
  public canvas : any;
  public ctx;
  public mem:any;
  public cpu:any;
  public power:any;
  public canvas1 : any;
  public ctx1;
  public canvas2 : any;
  public ctx2;
  public gradientFill;
  public gradientChartOptionsConfiguration: any;
  public gradientChartOpt
  public subscription:any;
  public arr:any;
  public arr1:any;
  public cont:any;
  public cont1:any;
  public memArr:any;
  public memPerArr:any;
  public cpuArr: any;
  public powerArr:any;
  public generalArr:any;
  public xAxys:any;
  public pid:any;

  constructor(private http: HttpClient, private router:Router){

  }
  public ngOnInit(){
    this.cpu=0;
    this.mem=0;
    this.power=0;
    this.generalArr=[];
    this.memArr=[,,,,,,,,,];
    this.memPerArr=[,,,,,,,,,];
    this.cpuArr=[,,,,,,,,,];
    this.powerArr=[,,,,,,,,,];
    this.xAxys=[,,,,,,,,,];
    const source = interval(1000);
    this.cont=0;
    this.pid=history.state['pid'];
   // this.urlapi = 'http://192.168.1.15:8080';
   this.arr=[3,4 ,5 ,6 , 5];
   this.arr1=[2, 1, 3.5, 7, 3];
    this.subscription = source.subscribe(val => this.getLastData());
    console.log("MONITORING");
    this.canvas = document.getElementById("chartStock");
      this.ctx = this.canvas.getContext("2d");

      this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
      this.gradientStroke.addColorStop(0, '#80b6f4');
      this.gradientStroke.addColorStop(1, this.chartColor);

      this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
      this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
      this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

      this.myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
          labels: this.xAxys,
          datasets: [{
            label: "Memory Bytes",
            borderColor: "#f17e5d",
            pointBackgroundColor: "#f17e5d",
            pointRadius: 3,
            pointHoverRadius: 3,
            fill: false,
            borderWidth: 3,
            data:  this.memArr
          },
          {
            label: "Memory %",
            borderColor: "#E6D10D",
            pointBackgroundColor: "#E6D10D",
            pointRadius: 3,
            pointHoverRadius: 3,
            fill: false,
            borderWidth: 3,
            data:this.memPerArr
          }]
        },
        options: {

          legend: {

            display: false
          }
        }
      });

      this.canvas1 = document.getElementById("chartStock1");
      this.ctx1 = this.canvas1.getContext("2d");
      this.myChart1 = new Chart(this.ctx1, {
        type: 'line',
        data: {
          labels: this.xAxys,
          datasets: [{
            label: "Active Users",
            borderColor: "#f17e5d",
            pointBackgroundColor: "#f17e5d",
            pointRadius: 3,
            pointHoverRadius: 3,
            fill: false,
            borderWidth: 3,
            data:  this.cpuArr
          }]
        },
        options: {

          legend: {

            display: false
          }
        }
      });


      this.canvas2 = document.getElementById("chartStock2");
      this.ctx2 = this.canvas2.getContext("2d");
      this.myChart2 = new Chart(this.ctx2, {
        type: 'line',
        data: {
          labels: this.xAxys,
          datasets: [{
            label: "Active Users",
            borderColor: "#f17e5d",
            pointBackgroundColor: "#f17e5d",
            pointRadius: 3,
            pointHoverRadius: 3,
            fill: false,
            borderWidth: 3,
            data:  this.powerArr
          }]
        },
        options: {

          legend: {

            display: false
          }
        }
      });
      console.log(`DATA: ${history.state['pid']}`);
  }

  private getLastData(){
    //this.fileService.getTop()
    const url =`${constants.apiURL}/getPidData/${this.pid}`;
    this.http
    .get(url)
    .subscribe(data=>{
      this.memArr.push(data['memBytes']);
      this.memPerArr.push(data['memPercen']);
      this.cpuArr.push(data['cpuPercen']);
      this.powerArr.push(data['powerPercen']);
      this.xAxys.push(data['timestamp']);
      this.memArr.shift();
      this.memPerArr.shift();
      this.cpuArr.shift();
      this.powerArr.shift();
      this.xAxys.shift();
      this.myChart.update(this,this.memArr);
      this.myChart.update(this,this.memPerArr);
      this.myChart1.update(this,this.cpuArr);
      this.myChart2.update(this,this.powerArr);
      this.generalArr.push(data);
      this.mem=data['memBytes']/1000;
      this.cpu=data['cpuPercen'];
      this.power=data['powerPercen'];
      console.log(data);
    });
  }

 /* private getDoors(){
    if(this.cont<10){
      this.arr.push(7+this.cont);
      this.cont++;
      this.arr1.push(1);
      this.cont1+=2;
    }else if(this.cont>15){
      this.cont--;
      this.cont1--;
    }else{
      this.arr.push(this.cont-1);
      this.arr1.push(1);
      this.cont--;
      this.cont1--;
    }
    console.log(this.arr);
   // this.arr.push(7);
    this.arr.shift();
    this.arr1.shift();
   // this.myChart.data.datasets=this.arr1;
    this.myChart.update(this.arr);
     this.myChart.update(this.arr1);
  }*/
    
}
