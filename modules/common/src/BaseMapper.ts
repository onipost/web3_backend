export abstract class BaseMapper<FROM, TO> {

    abstract map(data: FROM): TO
}

export abstract class BaseListMapper<FROM, TO> extends BaseMapper<FROM[], TO[]> {
    
    map(data: FROM[]): TO[] {
        return data.map(item => this.mapItem(item))
    }

    protected abstract mapItem(data: FROM): TO
} 