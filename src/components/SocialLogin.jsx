import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className="space-y-2">
            <h1 className="font-semibold">Login With</h1>
            <button className="btn w-full"><FcGoogle />LoginWith Google</button>
            <button className="btn w-full"><FaGithub />
LoginWith Github</button>
        </div>
    );
};

export default SocialLogin;