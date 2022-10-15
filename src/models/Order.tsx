class Order {
    id: number;
    authorId: number;
    machinesIds: string[];
    status: string;
    date: number;

    public constructor(id: number) {
        this.id = id;
        this.authorId = Math.random();
        this.machinesIds = ["AAA", 'BBB'];
        this.status = Math.random() * 2 > 1.3 ? "Done" : Math.random() > 0.5 ? "In process" : "Waiting for confirmation";
        this.date = new Date().getTime();
    }
}
export default Order;