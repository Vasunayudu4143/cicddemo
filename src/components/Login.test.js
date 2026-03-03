import { render ,screen} from "@testing-library/react"
import Login from "./Login"


test("checking if input is there or not",()=>{
     
    render(<Login/>)

    const inputele=screen.getByText("Login Page");

    console.log("what inputele variable contains",inputele);
})