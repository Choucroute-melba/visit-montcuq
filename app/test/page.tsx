import Link from "next/link";


export default function Page() {

    return (
        <div className={"flex flex-col pl-3.5"}>
            <h1>Testing Playground</h1>
            <Link href={"/test/logo"}>Logo</Link>
            <Link href={"/test/icons"}>Icônes</Link>
        </div>
    )
}