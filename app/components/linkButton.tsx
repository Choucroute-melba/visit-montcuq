import Link from "next/link";


export default function LinkButton({ children, href }: any) {
  return (
      <Link href={href} className={"bg-secondary-600 text-primary-50 p-2.5 pr-4 pl-4 rounded border border-secondary-300 hover:bg-secondary-500 transition"}>{children}</Link>
  )
}
