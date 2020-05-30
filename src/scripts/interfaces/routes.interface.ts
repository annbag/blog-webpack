interface Route {
    path: string;
    handler: (...args: any[]) => void;
}

export interface Routes extends Array<Route> {
}