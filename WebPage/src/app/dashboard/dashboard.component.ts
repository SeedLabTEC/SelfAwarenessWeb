import { Component, OnInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js';
import {memory,cpu,power} from '../models/datasets'
import { getLocaleTimeFormat } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import swal from 'sweetalert2'
import { FileService } from '../services/file.service';
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
  subscription: Subscription;
  counter:number;
  autoRefresh:Boolean;
  fileData: File = null;
  constructor( private fileService : FileService){

  }
  public ngOnInit(){
    this.powerData = new Array<power>();
    this.memoryData = new Array<memory>();
    this.cpuData = new Array<cpu>();
    this.counter = 0;
    this.autoRefresh = false;
    this.subscribe();    
    this.fileData = new File(null,null);
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
      this.fileData = files.item(0);
  }

  uploadFile(){
    this.fileService.uploadDoc(this.fileData,()=>{});
  }

  runApp(){
    this.fileService.runApp(this.fileData.name,()=>{})
  }

  public addData(){
    var mem = new memory();
    mem.date= new Date();
    mem.name = "AppTest";
    mem.memoryValue = 5.1;
    this.memoryData[this.counter] = mem;
    this.counter= this.counter+1;
  }

  public run(){
    
  }

    
}
