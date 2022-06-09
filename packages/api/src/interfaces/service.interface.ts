export interface IService<T> {
    getByCategoryAndCount(column: string): Promise<T[]>;
}
