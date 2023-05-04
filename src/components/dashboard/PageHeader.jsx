import Link from 'next/link'

export default function Header({title, breadcrumbs, children})
{
	
	return (
		<div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
			<h2 className="font-semibold text-title-md2 text-black">
				{ title }
			</h2>

			<div className="flex-1 flex sm:justify-end">
				{children}
			</div>

			<nav>
				<ol className="flex items-center gap-2 select-none">
					<li>
						<Link href="/admin">Dashboard</Link>
					</li>
					{ breadcrumbs }
				</ol>
			</nav>
		</div>
	)
}