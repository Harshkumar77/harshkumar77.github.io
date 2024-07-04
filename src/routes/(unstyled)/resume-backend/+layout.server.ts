export const prerender = true;
import { resumeBackend, resumeSoftware } from "../../../data";

export function load() {
  return { link: resumeBackend }
}
