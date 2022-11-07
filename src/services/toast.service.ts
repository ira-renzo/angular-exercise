import {Injectable} from '@angular/core';
import {MessageService} from "primeng/api";

interface extraOptions {
    successKeyword?: string;
    successCallback?: Function;
    isGood?: boolean;
    isBad?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(private messageService: MessageService) {
    }

    sendToast(message: string, {successKeyword, successCallback, isGood, isBad}: extraOptions = {}) {
        if (isGood) {
            this.messageService.add({severity: 'success', summary: message});
            return;
        }

        if (isBad) {
            this.messageService.add({severity: 'error', summary: message});
            return;
        }

        if (successKeyword == undefined) {
            this.messageService.add({severity: 'info', summary: message});
            return;
        }

        if (message.includes(successKeyword)) {
            this.messageService.add({severity: 'success', summary: message});
            if (successCallback != undefined) successCallback();
        } else {
            this.messageService.add({severity: 'error', summary: message});
        }
    }

}