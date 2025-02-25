import { signIn } from "@/lib/auth"

export function SignIn() {
    return (
        <div>
        <form
            className="flex flex-col px-8 py-6 bg-white rounded-xl max-w-lg mx-auto mt-20"
            action={async (formData) => {
                "use server"
                // console.log(formData)
                await signIn("nodemailer", formData)
            }}
        >
            <p className="text-xl font-semibold text-gray-800 pb-6">Email provider Authentication</p>
            <p className="text-base font-medium text-gray-800 pb-4">Signin with your email</p>
            <input type="text" name="email" placeholder="Enter email" className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-gray-500 hover:border-gray-500 outline-none duration-200" />
            <button type="submit" className="bg-gray-700 text-white rounded-lg px-8 py-3 font-medium w-full mx-auto text-lg mt-6 hover:bg-gray-800 duration-200">Continue with email</button>
        </form>
        
        </div>
    )
}