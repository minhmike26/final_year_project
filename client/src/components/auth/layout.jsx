import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
    const [offset, setOffset] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "Welcome to the Gym Store for Gym Enthusiasts!";

    useEffect(() => {
        const handleScroll = () => setOffset(window.pageYOffset);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayedText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <div className="flex min-h-screen w-full">
            <div
                className="hidden lg:flex items-center justify-center w-1/2 px-12 bg-cover bg-center bg-no-repeat relative animate-fadeIn"
                style={{
                    backgroundImage: "url('https://hazushop.com/wp-content/uploads/2023/03/thuc-pham-chuc-nang-tap-gym-1.jpg')",
                    backgroundPositionY: `${offset * 0.5}px`, // Hiệu ứng parallax
                }}
            >
                <div className="absolute inset-0 bg-black opacity-0 animate-fadeIn" style={{opacity: 0.5}}/>
                <div className="relative z-10 max-w-md space-y-6 text-center text-primary-foreground">
                    <h1 className="text-4xl font-extrabold tracking-tight animate-fadeInScale">
                        {displayedText}
                    </h1>
                </div>
            </div>
            {/*<div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 float-animation">*/}
            <div className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8 background-color-shift float-animation">
            {/*    <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 animate-slideIn">*/}
            {/*<div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 hover-scale-up">*/}

                <Outlet/>
            </div>
        </div>
    );
}

export default AuthLayout;
