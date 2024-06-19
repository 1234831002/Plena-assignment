export class search {
    userName!: string;
    minAge!: number;
    maxAge!: number
    constructor(data) {
        this.userName = data.userName
        this.maxAge = data.maxAge ? data.maxAge : 0
        this.minAge = data.minAge ? data.minAge : 0
    }
}