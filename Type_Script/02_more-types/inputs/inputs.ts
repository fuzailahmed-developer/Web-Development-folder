const userName = document.getElementById("name") as HTMLInputElement | null;
const userEmail = document.getElementById("email") as HTMLInputElement | null;
const userPassword = document.getElementById("password") as HTMLInputElement | null;

const getInfo = () => {
    if (!userName || !userEmail || !userPassword) {
        console.error("Missing input elements in DOM");
        return;
    }

    const name: string = userName.value;
    const email: string = userEmail.value;
    const password: string = userPassword.value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
};
