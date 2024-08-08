import AuthForm from '@/components/AuthForm'

const SignUp = async () => {
    return (
        <section className="flex-center size-full max-sm:px-6">
            <div className='flex absolute left-0 top-0'><p>needs a valid 2-letter <strong>State</strong>, Dwolla is US based authenticator. Enter "<strong><em>NY</em></strong>"
                or any from this <a href='https://www23.statcan.gc.ca/imdb/p3VD.pl?Function=getVD&TVD=53971' target="_blank"><strong><u>states</u></strong></a></p></div>
            <AuthForm type="sign-up" />
        </section>
    )
}

export default SignUp