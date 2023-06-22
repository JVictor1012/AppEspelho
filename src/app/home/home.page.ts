import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cameraPreviewOptions: CameraPreviewOptions = {
    position: 'front',
    height: 1920,
    width: 1080,
    enableZoom: true
  };

  
  constructor() {
    CameraPreview.start(this.cameraPreviewOptions);
 }


}
