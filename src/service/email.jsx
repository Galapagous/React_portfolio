import emailjs from "@emailjs/browser";

export const sendEmail = (formData)=>{
    emailjs.sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_APP_PUBLIC_KEY,
    ).then((response)=>{
        console.log("SUCCESS!", response.status, response.text);
        return true
    },
        (error)=>{
            console.log("FAILED...", error);
            return false;
        })
}