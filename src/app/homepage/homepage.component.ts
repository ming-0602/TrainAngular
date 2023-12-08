import { Component, OnInit } from '@angular/core';
import { TrainDataService } from "../train-data.service";

export interface Train {
  _id: string;
  CurrentLocation: string;
  PublicMessage: string;
  ExpArrival: string;
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  providers: [TrainDataService]
})



export class HomepageComponent implements OnInit {
  constructor(private traindataservice: TrainDataService) {}
    train: Train[] = [];



    private gettrains(): void {
        this.traindataservice
            .gettrain()
            .then(foundtrain => {
                this.train = foundtrain;
            });
    }

    ngOnInit() {
        this.gettrains();
    }
}


