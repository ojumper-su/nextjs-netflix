import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
    return <Link href='/'>
        <a>
              <Image 
                src={`/images/netflix-logo.svg`}
                altText={'Neflix logo'}
                width={200}
                height={60} 
            />
        </a>
    </Link>
}
export default Logo