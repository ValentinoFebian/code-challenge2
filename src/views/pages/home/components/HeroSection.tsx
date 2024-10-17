function HeroSection() {
    return (
        <div className="bg-[url('/img/Hero.jpg')] bg-cover bg-center">
            <div className="inset-0 bg-black bg-opacity-65 h-[50em] flex items-center justify-center p-4">
                <div className="border-2 border-white flex flex-col md:flex-row items-center text-center text-gray-50 w-full max-w-[50em] h-auto md:h-[20em] p-4 md:p-0">
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-gray-50">
                            Truthful Learning for a Better Tomorrow
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed max-w-[45em] mx-auto italic text-gray-100 p-1">
                            Through our honest approach to tutoring, 
                            we guide every learner on a path of genuine understanding, ensuring they are equipped with the truthful knowledge they need 
                            to make informed decisions and shape a better tomorrow.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
