const Node = require('./node');

class LinkedList {

    constructor() {

        this._head = null;
        this._tail = null;
        this.length = 0;

    }

    append(data) {
        
        const curr = new Node(data);

        if (this._head) {

            this._tail.next = curr;
            curr.prev = this._tail;

            this._tail = curr;

        } else {

            this._head = curr;
            this._tail = curr;

        }

        this.length++;

        return this;
    }

    head() {

        if (this._head) {

            return this._head.data;

        } else {

            return null;

        }
    }

    tail() {

        if (this._tail) {

            return this._tail.data;

        } else {

            return null;

        }
    }

    at(index) {

        if (this._head) {

            let curr = this._head;
            let cnt = 1;

            while (cnt <= index) {
                curr = curr.next;
                cnt++;
            }

            return curr.data;

        } else {

            return null;

        }

    }

    insertAt(index, data) {

        if(this._head) {

            let elem = new Node(data);

            let curr = this._head;
            let cnt = 1;

            while (cnt <= index) {

                curr = curr.next;

                cnt++;

            }

            elem.next = curr;

            if(curr.prev) {

                curr.prev.next = elem;

            } else {

                this._head = elem;

            }

            this.length++;

        } else {

            this.append(data);

        }

        return this;
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }

    clear() {

        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {

        let curr = this._head;
        let cnt = 1;

        while (cnt <= index) {

            curr = curr.next;

            cnt++;

        }

        if (curr.prev) {

            curr.prev.next = curr.next;

        } else {

            this._head = curr.next;

        }

        this.length--;

        return this;
    }

    reverse() {
        [this._head, this._tail] = [this._tail, this._head];

        let curr = this._tail; 

        while(curr && this.length > 1) {

            [curr.prev, curr.next] = [curr.next, curr.prev];

            curr = curr.prev;
        }

        return this;
    }

    indexOf(data) {

        let curr = this._head;
        
        let cnt = 0;
        let res = null;

        while (curr) {

            if (curr.data === data){

                res = cnt;

                break;

            }

            curr = curr.next;

            cnt++;

        }

        return res !== null ? res : -1;

    }
    
}

module.exports = LinkedList;