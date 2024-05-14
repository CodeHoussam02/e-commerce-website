export default function Validation(values) {
    const errors = {}
    // regerx for email and password 
    //                     no space|not space
    //                     and @   |and @ after @ | length
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/
    // const passwordPattern = /^(?=.*)(?=.*[a-z])(?=.*[A-Z])(a-zA-Z0-9){8,}$/

    if(values.fullname === "") {
        errors.fullname = "Name field is required"
    }
    // validate email
    if(values.email === "") {
        errors.email = "Email field is required"
    }else if (!emailPattern.test(values.email)) {
        errors.email = "Email is not correct"
    }
    // validate pass
    if (values.password === "") {
        errors.password = "Password field is required"
    }
    
    return errors;
}