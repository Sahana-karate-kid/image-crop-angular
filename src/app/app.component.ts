import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imgChangeEvt: any = '';
  cropImgPreview: any = '';
  uploadImage: any='';
  roundCropper: any='true';

  onFileChange(event: any): void {
    this.imgChangeEvt = event;
  }
  cropImg(e: ImageCroppedEvent) {
    this.cropImgPreview = e.base64;
    this.uploadImage= e.base64;
    console.log(this.uploadImage);
  }

  imgLoad() {
    console.log('loaded');
  }

  initCropper() {
    // init cropper
  }

  imgFailed() {
    console.log('Loading failed');
  }
 
 
}