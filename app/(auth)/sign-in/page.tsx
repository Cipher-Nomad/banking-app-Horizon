import AuthForm from '@/components/AuthForm'

const SignIn = () => {
    return (
        <section className="flex-center size-full max-sm:px-6">
            <AuthForm type="sign-in" />
            <div className='absolute left-0 top-0'>testing email: <strong>dummyUser2@dummy.com</strong> <br />
                testing password: <strong>dummy123</strong></div>
        </section>
    )
}

export default SignIn