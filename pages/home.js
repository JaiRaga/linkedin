import Image from 'next/image'

function home() {
	return (
		<div>
			<header>
				<div className='relative w-36 h-10'>
					<Image src='https://rb.gy/vtbzlp' layout='fill' objectFit='contain' />
				</div>
			</header>
			<div className='flex items-center sm:divide-x divide-gray-300'></div>
		</div>
	)
}

export default home
