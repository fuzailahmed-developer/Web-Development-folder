import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

function Login() {
    return (
        <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
            <div className="w-full max-w-md  py-7 px-8 rounded-lg border border-white">
                <h1 className="text-2xl mt-1 font-bold mb-5 text-center">Login</h1>
                <FieldSet>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="Email">Email</FieldLabel>
                            <Input id="Email" type="text" placeholder="Enter Your Email" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="password">Password</FieldLabel>
                            <FieldDescription>
                                Must be at least 8 characters long.
                            </FieldDescription>
                            <Input id="password" type="password" placeholder="••••••••" />
                        </Field>
                    </FieldGroup>
                </FieldSet>
                <div className="mx-3 flex flex-col gap-y-4">
                    <h1 className="text-sm text-[#dddddd73] flex gap-x-1.5 justify-center mt-5">Want to create a new account? <span className="text-white font-bold cursor-pointer letter-spacing-add">Create</span></h1>
                    <Button className="w-full text-sm font-medium cursor-pointer">
                        Login
                    </Button>
                </div>
                <div className="or-line">
                    or
                </div>
                <div className="mt-2 py-2">
                    <Button className="w-full text-sm font-medium cursor-pointer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="" className="w-5 h-5" />
                        Login with Google
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login