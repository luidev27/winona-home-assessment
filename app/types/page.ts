// app/types/page.ts

export interface PageSEO {
  title: string
  description: string
}

export interface PageSummary {
  id: string
  title: string
  datePublished: string
  dateModified: string
  seo: PageSEO
}

export interface PageReviewer {
  name: string
  credentials: string
  affiliation: string
}

export interface PageDetail extends PageSummary {
  reviewer: PageReviewer
  body: string
}
