import Image from 'next/image'
import Link from 'next/link'

export default function Custom404() {
    return <div className="container w-screen h-screen flex justify-center items-center">
        <div className="space-y-10 text-center">
            <h1 className="text-5xl font-bold">404</h1>
            <h1 className="text-xl">Page not found &nbsp; :(</h1>
            <div className="mt-4 rounded-full overflow-hidden bg-yellow-50">
                <Image src="/images/svgs/loading.svg" alt="Embarassment egg" 
                objectFit="cover" 
                width={250} height={250} />
            </div>
            <p>
                <Link href="/"><a className="text-md underline font-semibold hover:text-gray-500">Return to homepage</a></Link>
            </p>
        </div>

    </div>
  }