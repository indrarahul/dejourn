export interface User {
    id: string;
    name: string;
    imgUrl: string;
}

export interface Stand{
    id: string;
    author: User;
    location: string;
    daysAgo: String;
    option: string;
    content: string;
    expThrd: ExploreThread;
    child: ExploreThread[];
}

export interface ExploreThread {
    id: string;
    pStandId: string;
    fromUser: User;
    forUser: User;
    child: string[];
}