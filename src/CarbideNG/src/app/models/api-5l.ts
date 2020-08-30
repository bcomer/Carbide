import { WallThickness } from './wall-thickness';

export class Api5L{
    constructor(
        public nominalPipeSize: number,
        public nominalOd: number,
        public wallThickness: WallThickness[]=[]
    
    ) {}
}