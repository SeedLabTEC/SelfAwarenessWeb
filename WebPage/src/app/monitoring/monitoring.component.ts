import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { interval, Subscription } from 'rxjs';
import { constants } from '../config/constants';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
declare var require: any

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
  public name:any;
  public sliderRegular :any;
  public sliderRegular1 :any;
  public sliderRegular2 :any;
  

  constructor(private http: HttpClient, private router:Router){

  }

  public ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  public ngOnInit(){
    // var require: any
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
    this.name=history.state['name'];
  console.log(this.name);
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
      console.log(`DATA: ${this.pid}`);
      var noUiSlider = require('nouislider');

      this.sliderRegular = document.getElementById('sliderRegular');
      this.sliderRegular1 = document.getElementById('sliderRegular1');
      this.sliderRegular2 = document.getElementById('sliderRegular2');

      noUiSlider.create(this.sliderRegular, {
            start: 40,
            connect: [true,false],
            range: {
                min: 0,
                max: 100
            }
      });

      noUiSlider.create(this.sliderRegular1, {
        start: 40,
        connect: [true,false],
        range: {
            min: 0,
            max: 100
        }
      });

      noUiSlider.create(this.sliderRegular2, {
        start: 40,
        connect: [true,false],
        range: {
          min: 0,
          max: 100
        }
      });
  }

  private getLastData(){
    //this.fileService.getTop()
    if(this.pid!==undefined){
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
      this.myChart.update(this.memArr);
      this.myChart.update(this.memPerArr);
      this.myChart1.update(this.cpuArr);
      this.myChart2.update(this.powerArr);
      this.generalArr.push(data);
      this.mem=data['memBytes']/1000;
      this.cpu=data['cpuPercen'];
      this.power=data['powerPercen'];
      //console.log(data);
    });
  }
  }

  private getValues(){
    var data={
      pid:this.pid,
      mem:this.sliderRegular.noUiSlider.get(),
      cpu:this.sliderRegular1.noUiSlider.get(),
      power:this.sliderRegular2.noUiSlider.get()
    }
    console.log(data);
  }
    
}


