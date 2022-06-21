import '../styles/Banner.css'

function Banner({ logo }) {
	return <div className='lmj-banner'>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
		<h1 className='lmj-title'>La maison jungle</h1>
    </div>
}

export default Banner