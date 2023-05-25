import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { NoteCardComponent } from '../components/note-card/note-card.component';
import { CommonModule } from '@angular/common';
import { ModalInputComponent } from '../components/modal-input/modal-input.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, NoteCardComponent, CommonModule]
})
export class HomePage {

  message: string ="";
  colors = ['#FF9E9E', '#91F48F', '#FFF599', '#9EFFFF', '#B69CFF', '#387FFF', '#2ED36E', '#5260FF'];
  constructor(
    private modalCtrl: ModalController

  ) { }

  getRandomColor() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }
  data: any[] = [
    {
      id: 1,
      name: 'reza',
      desc: 'jfhyf123456',
      color: this.getRandomColor()
    },
    {
      id: 2,
      name: 'mouneeta',
      desc: '123456',
      color: this.getRandomColor()
    },
    {
      id: 3,
      name: 'abed',
      desc: '123456 234iye3iudtuite7gf 3436e8rdgeuwyfhgr',
      color: this.getRandomColor()
    },
    {
      id: 4,
      name: 'hamza',
      desc: '123456 dfkhjw934734 ufeu3y243fd',
      color: this.getRandomColor()
    },
    {
      id: 5,
      name: 'mahamud',
      desc: '123456eofhiwrtrygu3v2bew487tryfevb 34739yr 9et7gfe3 9eyfhgisdfjhygtrdsfghtfrdf,hybfrhytdet',
      color: this.getRandomColor()
    }
  ];


  
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInputComponent,
      mode: "ios"
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }

}
