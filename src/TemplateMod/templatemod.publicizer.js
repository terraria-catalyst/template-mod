import {createPublicizer} from "publicizer";

export const publicizer = createPublicizer("TemplateMod");

publicizer.createAssembly("tModLoader").publicizeAll();