import { IPosts } from "./iposts";

export class Community {

    constructor(
        public communityName: string, public communityLogo: string, public subGroups: string[], postList: IPosts[]) {

    }
}

