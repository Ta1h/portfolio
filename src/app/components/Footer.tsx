
const details = [
    {
        name: "Email Address",
        contact: "ralphtaoc071@gmail.com"
    },
    {
        name: "Phone number",
        contact: "+639953082793"
    },
    {
        name: "Location",
        contact: "CSJDM Bulacan, Philippines"
    },
]

const Footer = () => {
    return (
        <div id="Footer" className="bg-secondaryBackground sm:pt-10 sm:pb-6">
            <div className="sm:p-5 flex justify-center items-center col-span-3">
                <div className="text-center space-y-4">
                    <h1 className="sm:text-3xl text-4xl font-medium font-roboto text-secondary tracking-wide">Keep in touch</h1>
                    <h1 className="sm:text-2xl text-4xl font-extralight font-serif tracking-wider ">Looking forward to connect with you</h1>
                    <p className="font-light tracking-wider text-gray-200">Below are my contact details for your conveniece</p>
                </div>
            </div>
            <div className="sm:px-5 sm:pb-10 sm:space-y-3">
                {details.map((detail, index) => (
                    <div key={index} className="sm:p-3 grid grid-rows-2 p-4 rounded-xl drop-shadow-1xl h-min bg-gray-700 text-sm">
                        <p className="text-gray-100 font-semibold">{detail.name}</p>
                        <p className="font-light text-gray-200">{detail.contact}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer
