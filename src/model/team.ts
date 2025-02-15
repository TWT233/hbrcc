import {Member} from "@/model/member";

export class Team {
    members: Member[] = Array.from({length: 6}, () => new Member())
}