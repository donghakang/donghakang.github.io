type ProjectDescriptionProps = {
  main: string[]
  detail: string[]
}
type ProjectLinkProps = {
  www?: string
  github?: string
}

type ProjectProps = {
  id: number
  title: string
  images: string[]
  date: string
  stack: string[]
  description: ProjectDescriptionProps
  link?: ProjectLinkProps
}
