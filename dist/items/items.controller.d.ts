import { ItemsService } from './items.service';
import { Items } from '../items';
import { Item } from '../item';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Promise<Items>;
    find(id: number): Promise<Item>;
    create(item: Item): Promise<void>;
    update(item: Item): Promise<void>;
    delete(id: number): Promise<void>;
}
