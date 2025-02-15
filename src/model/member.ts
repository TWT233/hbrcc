import {Styles} from "@/data/styles";
import {newStatMap, Stat} from "@/model/stat";
import {SkillCall} from "@/model/skill";

export class Member {
    style: Styles | null = null;
    stat: Stat = newStatMap();
    skills: SkillCall[] = Array<SkillCall>();
}