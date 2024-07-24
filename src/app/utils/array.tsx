export function toMutableArray<T>(readonlyArray: readonly T[]): T[] {
    return Array.from(readonlyArray);
}