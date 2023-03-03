
export class Product{
    static sku: string;

    constructor(

        public sku:string,
        public name:string,
        public department: string[],
        public price: number
    )
    {}

        }
