import { useState } from "react";
import NatureImage from "../../assets/sunset.png";
import Logo from "../../assets/purplezone.png";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/Authservices"

const InputField = ({ type = "text", placeholder, value, onChange,name }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className="px-3 py-2 border-b border-gray-200 w-full focus:outline-none text-sm"
    />
);

const Button = ({ children, onClick }) => (
    <button
        onClick={onClick}
        className="text-sm w-[100px] mt-4 py-2 rounded-md text-gray-400 text-sm border rounded-lg transition hover:text-gray-800"
    >
        {children}
    </button>
);

const UserAuth = () => {
    const [mode, setMode] = useState("register");
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirm_password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (mode === "register") {
                const res = await registerUser(formData);
                console.log("Register Data:", res);
                navigate("/test")
            } else {
                console.log("Login Data:", {
                    username: formData.username,
                    password: formData.password,
                });
                navigate("/test")
            }
        }
        catch (error) {
            console.log("Error submiting registerdata", error)
        }
    };

    return (
        <div className="flex flex-col gap-2 text-sm">
            <div className="w-full h-full px-20 py-3">
                <img src={Logo} alt="Logo" className="h-8 object-contain" />
            </div>

            {/* Main Layout */}
            <div className="relative flex lg:flex-row md:flex-row flex-col max-w-screen-8xl min-h-[100vh]">
                {/* Left Background */}
                <div className="bg-gray-200 lg:w-[70%] md:w-[70%] w-full flex items-center justify-center">
                    <img src={NatureImage} alt="Nature" className="w-full h-full object-cover" />
                </div>

                {/* Right Background */}
                <div className="bg-gray-700 lg:w-[40%] md:w-[40%] w-full min-h-[100vh]" />
                <div className="absolute inset-0 flex items-center justify-center lg:left-80 ">
                    <form
                        onSubmit={handleSubmit}
                        className="shadow-lg px-6 py-16 rounded-md bg-white border w-[380px] flex flex-col gap-4"
                    >
                        {/* Header */}
                        <header className="flex gap-10 justify-center font-semibold text-gray-600">
                            <p
                                className={`cursor-pointer ${mode === "register" ? "text-gray-800" : ""}`}
                                onClick={() => setMode("register")}
                            >
                                REGISTER
                            </p>
                            <span>|</span>
                            <p
                                className={`cursor-pointer ${mode === "login" ? "text-gray-800" : ""}`}
                                onClick={() => setMode("login")}
                            >
                                LOGIN
                            </p>
                        </header>

                        {/* Form Fields */}
                        {mode === "register" ? (
                            <div className="space-y-4">
                                <InputField
                                    placeholder="Username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                <InputField
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <InputField
                                    type="password"
                                    placeholder="ConfirmPassword"
                                    name="confirm_password"
                                    value={formData.confirm_password}
                                    onChange={handleChange}
                                />
                            </div>
                        ) : (
                            <div className="space-y-3">
                                <InputField
                                    placeholder="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                <InputField
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                        )}

                        {/* Button */}
                        <div className="justify-center flex text-center">
                            <Button>{mode === "register" ? "Register" : "Submit"}</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserAuth;
