
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { constants } from '../config/constants';
import Swal from 'sweetalert2';
//const apiUrl = "http://192.168.1.111:3000/"
const apiUrl = constants.apiURL;

@Injectable()
export class FileService {
  	constructor(private http: HttpClient) { }
	
	uploadDoc(app:File,cb:any) {
		let appFormData = new FormData();
	    appFormData.append('fileUploaded', app,app.name)
	    console.log("Uploading file " + appFormData);
        return this.http.post<any>(constants.apiURL+constants.uploadFileURL+app.name,
            app,
        {
             headers: new HttpHeaders(
				// {
				// 'Content-Type' : 'application/json'
				// }
			)
         }).subscribe(data => {
              cb();
                }, (err: HttpErrorResponse) => {
                    Swal.fire('Error', 'Error de comunicación con el servidor', 'error');
                }
            );
	}
	runApp(app,cb:any) {
        return this.http.post<any>(constants.apiURL+constants.runAppURL+app,
            null,
        {
             headers: new HttpHeaders(
				// {
				// 'Content-Type' : 'application/json'
				// }
			)
         }).subscribe(data => {
              cb();
                }, (err: HttpErrorResponse) => {
                    Swal.fire('Error', 'Error de comunicación con el servidor', 'error');
                }
            );
    }

}