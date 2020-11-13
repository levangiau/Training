import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Class() {
    const router = useRouter()
    console.log('router', router.query.i)
    function handleClick() {
        //cach 1
        router.push('/') // ham push co tac dung chuyen sang trang duoc chi dinh.
    }
    return (
        <>
            <h1>Day la user1 co id: {router.query.i}</h1>
            <Link href='/thongtin'><a>Hay nhap vao</a></Link>
            <button onClick={handleClick}>Click me!!</button>

        </>
    )
}

