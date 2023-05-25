import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, IonicModule, ModalController } from '@ionic/angular';
import { ModalInputComponent } from '../modal-input/modal-input.component';
import { ModalDetailsComponent } from '../modal-details/modal-details.component';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
  standalone:true,
  imports:[IonicModule,CommonModule]
})
export class NoteCardComponent  implements OnInit {

  

  @Input() item!: any;


  //ngUnsubscribe = new Subject();

  constructor(
    //private toastService: ToastService,
    //private productService: ProductService,
    //private loadingService: LoadingService
    
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  // addToCart(id:number) {
  //   this.loadingService.presentLoading('Please wait...');
  //   this.productService.addToCart(id)
  //     .pipe(takeUntil(this.ngUnsubscribe))
  //     .subscribe({
  //       next: (response: AddToCart): void => {
  //         this.loadingService.dismissLoading();
  //         console.log(this.product);
  //         this.toastService.loadtoast('success', Products.ADD_TO_CART_SUCCESS_MSG);
  //       },
  //       error: () => {
  //         this.loadingService.dismissLoading();
  //         this.toastService.loadtoast('danger', Products.ADD_TO_CART_FAILED_MSG);
  //       }
  //     });
  // }

  // ngOnDestroy() {
  //   this.ngUnsubscribe.next(null);
  //   this.ngUnsubscribe.complete();
  // }


 async onClick() {
    console.log('item click');

    const modal = await this.modalCtrl.create({
      component: ModalDetailsComponent,
      mode: "ios"
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      //this.message = `Hello, ${data}!`;
    }
  }
  

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Delete note?',

      mode: "ios",
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
  getImageUrl(): string {
    //const imageUrl = this.product.PictureModels[0]?.ImageUrl;
    return '';
  }

}

