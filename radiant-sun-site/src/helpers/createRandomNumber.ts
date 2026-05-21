export function createRandomNumber( start: number, end: number ): number {
    
    const number = Math.floor( start + Math.random() * end );
    
    return number;
    
}
