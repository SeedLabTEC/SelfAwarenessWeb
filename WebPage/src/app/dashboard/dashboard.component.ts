import { Component, OnInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js';
import {memory,cpu, power, top} from '../models/datasets'
import { Router, ActivatedRoute } from '@angular/router';
import { getLocaleTimeFormat } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import swal from 'sweetalert2';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FileService } from '../services/file.service';
import { constants } from '../config/constants';
declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public powerData:Array<power>;
  public cpuData:Array<cpu>;
  public memoryData:Array<memory>;
  public topData:Array<top>;
  subscription: Subscription;
  counter:number;
  autoRefresh:Boolean;
  fileData: File = null;
  ef:string;
  constructor( private fileService : FileService, private http: HttpClient, private router:Router){

  }
  public ngOnInit(){
    
    this.autoRefresh = false;
    this.subscribe();    
    //this.fileData = new File(null,null);
    //this.getTop();
  }


  public ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  public subscribe(){
    
      const source = interval(1000);
      this.subscription = source.subscribe(val => this.addData());
      if(this.autoRefresh==false){
        this.subscription.unsubscribe();
      }
    }

    handleFileInput(files: FileList) {
      //this.fileData = files.item(0);
  }

  uploadFile(){
    //this.fileService.uploadDoc(this.fileData,()=>{});
  }

  runApp(){
    //this.fileService.runApp(this.fileData.name,()=>{})
  }

  public addData(){
    var mem = new memory();
    mem.date= new Date();
    mem.name = "AppTest";
    mem.memoryValue = 5.1;
    this.memoryData[this.counter] = mem;
    this.counter= this.counter+1;
  }

  public getTop(){
    //this.fileService.getTop()
    const url =`${constants.apiURL}/top`;
    this.http
    .get(url)
    .subscribe(data=>{
     this.topData=data['result'];
    });
  }

  public run(){
    
  }

  public monitorApp(tdata){
    var url='';
    if(tdata==1){
      //console.log("1");
      url=`${constants.apiURL}/runDefined/1`;
    }else if(tdata==2){
      //console.log("2");
      url=`${constants.apiURL}/runDefined/2`;
    }else if(tdata==3){
      //console.log("3");
      url=`${constants.apiURL}/runDefined/3`;
    }else{
      //console.log("4");
      url=`${constants.apiURL}/runDefined/4`;
    }
    var data={
      mem:[0,20],
      cpu:[0,20],
      power:[0,20],
      priority:{
        mem:2,
        cpu:1,
        power:3
      }
    }
    var httpOptions = {
      headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
      })}
    this.http
    .post<any>(url, data,  httpOptions
      )
      .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      this.router.navigateByUrl('/monitoring', { state: { pid:data['pid'] , name:'saxpy'} });
      },
      error  => {
      
      console.log("Error", error);
      
      }
      
      );
  }

  public monitor(pid, name){
    swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to monitor the app '+pid+ ' - '+ name+'?',
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        const url =`${constants.apiURL}/monitorApp/${pid}`;
    this.http
    .post(url, {
      })
      .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {
      
      console.log("Error", error);
      
      }
      
      );
        this.router.navigateByUrl('/monitoring', { state: { pid:pid , name:name} });
      }
    })
  }

    
}
