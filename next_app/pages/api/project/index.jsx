import { ProjectData } from "@/projectData";

export default function handler(req, res) {
  res.status(200).json(ProjectData);
}
