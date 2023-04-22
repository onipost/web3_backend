import { TokenDataSource } from "./TokenDataSource"

export class Scaner {

    private sources: TokenDataSource[] = []

    addSource(source: TokenDataSource) {
        this.sources.push(source)
    }

    removeSource(source: TokenDataSource) {
        const index = this.sources.findIndex(object => { object == source })
        if (index == -1) return
        this.sources.splice(index, 1)
        
    }
}