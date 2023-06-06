import conectarDB from '../../lib/dbConnect'

export default function testmess () {
    return (
        <>
            <h1>Esto es una pagina de testeo</h1>
            </>
    )

}   

export async function getServerSideProps() {
    try {
        await conectarDB()

        return {props: {movies: 123}}
    } catch {
        console.log(error)
    }
}