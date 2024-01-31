import InputBox from "../components/input.component";
import {Link} from "react-router-dom";
import googleIcon from "../imgs/google.png";
import AnimationWrapper from "../common/page-animation";


const UserAuthForm = ({type}) => {
    return (
        <AnimationWrapper keyValue={type}>
            <section className="h-cover flex items-center justify-center">
                <form className="w-[80%] max-w-[400px]">
                    <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
                        {type = "Sign-In" ? "Welcome 👋" : "Join Us Today"}
                    </h1>

                    {
                        type !== "sign-in" ?
                        <InputBox
                            name="fullname"
                            type="text"
                            placeholder="Full Name"
                            icon="fi-ss-user"
                        />
                        : ""
                    }

                        <InputBox
                            name="email"
                            type="email"
                            placeholder="@yahoo.com"
                            icon="fi-ss-paper-plane"
                        />

                        <InputBox
                            name="password"
                            type="password"
                            placeholder="Enter your passkey"
                            icon="fi-rr-password"
                        />

                        <button className="btn-dark center mt-14" type="submit">
                            Sign Up
                        </button>

                        <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
                            <hr className="w-1/2 border-black" />
                            <p>Or</p>
                            <hr className="w-1/2 border-black" />
                        </div>

                        <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
                            <img src={googleIcon} alt="Google" title="login With Google" draggable="false" className="w-5"/>
                            Continue With Google
                        </button>

                        {
                            type === "sign-in" ? (
                                <p className="mt-6 text-dark-grey text-xl text-center">
                                    Don't have an account?
                                    <Link to="/sign-up" className="underline text-black text-xl ml-1">
                                        Join Us today
                                    </Link>
                                </p>
                            ) : (
                                <p className="mt-6 text-dark-grey text-xl text-center">
                                    Already a member?
                                    <Link to="/signin" className="underline text-black text-xl ml-1">
                                        Sign in here
                                    </Link>
                                </p>
                            )
                        }
                </form>
            </section>
        </AnimationWrapper>
    )
}

export default UserAuthForm;