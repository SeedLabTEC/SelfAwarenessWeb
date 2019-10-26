import { Component, OnInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js';
import {memory,cpu, power, top} from '../models/datasets'
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
  constructor( private fileService : FileService, private http: HttpClient){

  }
  public ngOnInit(){
    this.topData= new Array<top>();
    this.getTop();
    this.powerData = new Array<power>();
    this.memoryData = new Array<memory>();
    this.cpuData = new Array<cpu>();
    this.counter = 0;
    this.autoRefresh = false;
    this.subscribe();    
    //this.fileData = new File(null,null);
    this.ef="hola mundo";
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

  public test(text){
    swal.fire('Do you want to monitor the app '+text+'?');
  }

    
}
