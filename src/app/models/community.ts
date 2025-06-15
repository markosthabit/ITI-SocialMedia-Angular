import { IPost } from "./ipost";

export class Community {

    constructor(
        public communityName: string, public communityLogo: string, public subGroups: string[], postList: IPost[]) {

    }
}

