import { Suspense } from "react"
import type { Metadata } from 'next'
import Head from 'next/head'

type Params = {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params: { slug } }: Params): Promise<Metadata> {
    const metadata: Metadata = {
        title: slug,
        description: `This is the page of ${slug}`,
    };
    return metadata;
}

export default async function UserPage({ params: { slug } }: Params) {


    return (
        <>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                sddsvdsvsvdsv
            </Suspense>
        </>
    )
}