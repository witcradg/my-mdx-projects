import { promises as fs } from 'fs'
import path from 'path';
import Link from 'next/link';
import { compileMDX } from 'next-mdx-remote/rsc';

import Section from '@/components/Section';
import Container from '@/components/Container';
import Article from '@/components/Article';

// export const metadata = {
//   title: 'Products',
//   description: 'This is a test using the projects tree as a template'
// }

export default async function Products() {
  const filenames = await fs.readdir(path.join(process.cwd(), 'src/products'));

  interface Frontmatter {
    title: string;
  }

  const products = await Promise.all(filenames.map(async (filename) => {
    const content = await fs.readFile(path.join(process.cwd(), 'src/products', filename), 'utf-8');

    const { frontmatter } = await compileMDX<Frontmatter>({
      source: content,
      options: {
        parseFrontmatter: true
      }
    })
    return {
      filename,
      slug: filename.replace('.mdx', ''),
      ...frontmatter
    }
  }))

  return (
    <Section spacing="compact">
      <Container>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-10 md:mb-16">
          Products for links
        </h1>

        <Article withSidebar={false}>
          <h2 className="sr-only">Product Links</h2>
          <ul>
            {products.map(({ title, slug }) => {
              return (
                <li key={slug}>
                  <Link href={`/products/${slug}`}>{title}</Link>
                </li>
              )
            })}
          </ul>
        </Article>
      </Container>
    </Section>
  )
}
