import {Styles} from "@/data/styles";
import {newStatMap, Stat} from "@/model/stat";

export class Member {
    style: Styles | null = null;
    stat: Stat = newStatMap();
}