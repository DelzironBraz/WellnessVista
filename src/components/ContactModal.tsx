import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

const ContactModal = ({ closeForm }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="popup-form absolute mt-12 text-black">
                <form className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
                    <div className="flex justify-between">
                        <h1 className="text-4xl font-semibold text-center text-backgroundColor">Book Now</h1>
                        <button
                            className="text-2xl"
                            onClick={closeForm}
                        >
                            <AiOutlineClose />
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First name"
                            className="py-3 px-2 bg-[#D5F2EC] rounded-lg" />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Last name"
                            className="py-3 px-2 bg-[#D5F2EC] rounded-lg" />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                            className="py-3 px-2 bg-[#D5F2EC] rounded-lg" />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="tel"
                            name="number"
                            id="number"
                            placeholder="Phone number"
                            className="py-3 px-2 bg-[#D5F2EC] rounded-lg" />
                    </div>

                    <div className="flex justify-center">
                        <Button title="Book Appointment" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactModal;