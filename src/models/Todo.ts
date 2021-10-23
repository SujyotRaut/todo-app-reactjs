export default class Todo {
    id: string;
    text: string;
    checked: boolean;
    constructor(text: string) {
        this.id = Date.now().toString();
        this.text = text;
        this.checked = false;
    }
};