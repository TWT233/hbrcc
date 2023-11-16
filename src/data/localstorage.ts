import {NSName} from "@/data/NSS";
import {NSParam} from "@/model/effect";

function getSkillData(sn: NSName): NSParam | undefined {
    return JSON.parse(localStorage.getItem(getSDKey(sn))) as NSParam
}

function getSDKey(sn: NSName): string {
    return `SD_${sn}`
}