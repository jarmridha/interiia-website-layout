import { Projects } from "@/components/projects"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ProjectsPage() {
  return <><SiteHeader /><main className="pt-24"><Projects /></main><SiteFooter /></>
}
