import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../service/feedback.service';
import { Feedback } from '../../model/feedback';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-type',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css'],
    providers: [FeedbackService]
    //   TypeService
})
export class HistoryComponent implements OnInit {

    constructor(
        private feedbackService: FeedbackService,
        private modalService: NgbModal,
    ) { }

    feedbacks: Feedback[];

    feedbacksIA: Feedback[];
    feedbacksOCR: Feedback[];
    feedbacksRegra: Feedback[];

    viewIA: boolean;
    viewOCR: boolean;
    viewRegra: boolean;

    ngOnInit() {
        this.feedbacks = new Array<Feedback>();
        this.getAllFeedbacks();

        this.viewIA = true;
        this.viewOCR = false;
        this.viewRegra = false;

    }

    public viewTableIA() {
        this.viewIA = !this.viewIA;
        this.viewOCR = false;
        this.viewRegra = false;
    }
    public viewOCRTable() {
        this.viewOCR = !this.viewOCR;
        this.viewIA = false;
        this.viewRegra = false;
    }
    public viewRegTablRegra() {
        this.viewRegra = !this.viewRegra;
        this.viewIA = false;
        this.viewOCR = false;
    }

    private getAllFeedbacks() {
        this.feedbackService.getAllFeedbacksSolved().
            subscribe((res: Array<Feedback>) => {
                this.feedbacks = new Array<Feedback>();
                this.feedbacksIA = new Array<Feedback>();
                this.feedbacksOCR = new Array<Feedback>();
                this.feedbacksRegra = new Array<Feedback>();
                this.feedbacks = res;
                // console.log(this.feedbacks);

                for (let feedback of this.feedbacks) {
                    if (feedback.erro_id == "1") {
                        this.feedbacksIA.push(feedback);
                    } else if (feedback.erro_id == "2") {
                        this.feedbacksOCR.push(feedback);
                    } else if (feedback.erro_id == "3") {
                        this.feedbacksRegra.push(feedback);
                    }
                }

            });
    }
}
