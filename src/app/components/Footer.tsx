
const details = [
    {
        name: "Email",
        contact: "ralphtaoc071@gmail.com"
    },
    {
        name: "Phone number",
        contact: "+639953082793"
    },
    {
        name: "Location",
        contact: "Bulacan, Philippines"
    },
]

const Footer = () => {
    return (
        <div id="Footer" className="bg-secondaryBackground ">
            <div className="container flex justify-center py-20">
                <div className="grid grid-cols-3 grid-rows-2 gap-y-14 gap-x-5">

                    <div className="flex justify-center items-center col-span-3">
                        <div className="text-center space-y-4">
                            <h1 className=" text-4xl font-medium font-roboto text-secondary tracking-wide">Keep in touch</h1>
                            <h1 className=" text-4xl font-extralight font-serif tracking-wider ">Looking forward to connect with you</h1>
                            <p className="font-light tracking-wider text-gray-200">Below are my contact details for your conveniece</p>
                        </div>
                    </div>

                    {details.map((detail, index) => (
                        <div key={index} className="grid grid-rows-2 p-4 rounded-xl drop-shadow-1xl h-min bg-gray-700 text-sm">
                            <p className="text-gray-100 font-semibold">{detail.name}</p>
                            <p className="font-light text-gray-200">{detail.contact}</p>
                            <div></div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Footer
