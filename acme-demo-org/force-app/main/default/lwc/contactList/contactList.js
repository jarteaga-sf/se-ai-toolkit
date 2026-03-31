import { LightningElement, api, wire } from 'lwc';
import getActiveContacts from '@salesforce/apex/AccountService.getActiveContacts';

const COLUMNS = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Account', fieldName: 'AccountName' }
];

export default class ContactList extends LightningElement {
    @api recordId;
    columns = COLUMNS;
    contacts = [];
    errorMessage;
    isLoading = true;

    @wire(getActiveContacts, { accountId: '$recordId' })
    wiredContacts({ data, error }) {
        this.isLoading = false;
        if (data) {
            this.contacts = data.map((row) => ({
                ...row,
                AccountName: row.Account ? row.Account.Name : ''
            }));
            this.errorMessage = undefined;
        } else if (error) {
            this.contacts = [];
            this.errorMessage = 'Unable to load contacts. Please refresh.';
        }
    }

    get hasContacts() {
        return this.contacts.length > 0;
    }
}
